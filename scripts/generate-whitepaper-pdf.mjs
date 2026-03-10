import { copyFile, mkdir, readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const DIST_DIR = join(process.cwd(), "dist");
const OUTPUT_PATH = join(DIST_DIR, "whitepaper", "download.pdf");
const FALLBACK_SOURCE = join(process.cwd(), "public", "whitepaper", "aisecops-whitepaper.pdf");
const VIRTUAL_ORIGIN = "http://whitepaper.local";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2"
};

function distPathFromUrl(urlPathname) {
  let rel = decodeURIComponent(urlPathname).replace(/^\/+/, "");
  if (!rel || rel.endsWith("/")) rel = `${rel}index.html`;
  return normalize(join(DIST_DIR, rel));
}

async function fileForPathname(pathname) {
  const candidate = distPathFromUrl(pathname);
  if (!candidate.startsWith(DIST_DIR)) return null;

  try {
    const s = await stat(candidate);
    if (s.isDirectory()) return join(candidate, "index.html");
    return candidate;
  } catch {
    return null;
  }
}

async function generate() {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();

    await page.route(`${VIRTUAL_ORIGIN}/**`, async (route) => {
      const reqUrl = new URL(route.request().url());
      const filePath = await fileForPathname(reqUrl.pathname);

      if (!filePath) {
        await route.fulfill({ status: 404, body: "Not found" });
        return;
      }

      const ext = extname(filePath).toLowerCase();
      const contentType = MIME[ext] || "application/octet-stream";
      const body = await readFile(filePath);
      await route.fulfill({ status: 200, contentType, body });
    });

    await page.goto(`${VIRTUAL_ORIGIN}/whitepaper/`, { waitUntil: "networkidle" });

    // Wait for Mermaid diagrams to finish rendering to SVG.
    await page.waitForFunction(() => {
      const blocks = Array.from(document.querySelectorAll(".mermaid"));
      return blocks.length === 0 || blocks.every((node) => node.querySelector("svg"));
    }, { timeout: 20000 });

    await page.emulateMedia({ media: "screen" });
    await page.pdf({
      path: OUTPUT_PATH,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "14mm", right: "12mm", bottom: "14mm", left: "12mm" }
    });
  } finally {
    await browser.close();
  }
}

try {
  await generate();
  console.log("Generated PDF:", OUTPUT_PATH);
} catch (error) {
  console.error("Failed generating whitepaper PDF from rendered HTML:", error);
  try {
    await mkdir(join(DIST_DIR, "whitepaper"), { recursive: true });
    await copyFile(FALLBACK_SOURCE, OUTPUT_PATH);
    console.warn("Used fallback PDF at:", OUTPUT_PATH);
  } catch (fallbackErr) {
    console.error("Fallback PDF copy failed:", fallbackErr);
  }
  console.warn("Skipping HTML-rendered PDF generation in this environment. Build will continue.");
}
