import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const builtHtml = join(root, "dist", "whitepaper", "index.html");
const builtPdf = join(root, "dist", "whitepaper", "download.pdf");
const staticPdf = join(root, "public", "pdfs", "aisecops-whitepaper.pdf");

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function run() {
  let failed = false;

  // 1) Ensure built whitepaper HTML has Mermaid blocks.
  try {
    const html = await readFile(builtHtml, "utf8");
    const hasMermaidBlock = /class=["'][^"']*\bmermaid\b[^"']*["']/.test(html);
    if (!hasMermaidBlock) {
      console.error("[check:pdf] No Mermaid blocks found in dist/whitepaper/index.html.");
      failed = true;
    } else {
      console.log("[check:pdf] Mermaid blocks detected in built whitepaper HTML.");
    }
  } catch (error) {
    console.error("[check:pdf] Missing built whitepaper HTML:", builtHtml);
    console.error(error instanceof Error ? error.message : String(error));
    failed = true;
  }

  // 2) Ensure generated PDF exists and is not tiny.
  let builtPdfBytes = null;
  try {
    const pdfStat = await stat(builtPdf);
    if (pdfStat.size < 10_000) {
      console.error(`[check:pdf] Generated PDF looks too small (${pdfStat.size} bytes): ${builtPdf}`);
      failed = true;
    } else {
      console.log(`[check:pdf] Generated PDF present (${pdfStat.size} bytes).`);
    }
    builtPdfBytes = await readFile(builtPdf);
  } catch (error) {
    console.error("[check:pdf] Missing generated PDF:", builtPdf);
    console.error(error instanceof Error ? error.message : String(error));
    failed = true;
  }

  // 3) Ensure the static public PDF is present and matches the generated route PDF.
  if (builtPdfBytes) {
    try {
      const staticBytes = await readFile(staticPdf);
      if (sha256(builtPdfBytes) === sha256(staticBytes)) {
        console.log("[check:pdf] Static public PDF matches generated whitepaper PDF.");
      } else {
        console.error(
          "[check:pdf] Static public PDF differs from generated whitepaper PDF."
        );
        failed = true;
      }
    } catch {
      console.error("[check:pdf] Static public PDF not found:", staticPdf);
      failed = true;
    }
  }

  if (failed) {
    process.exitCode = 1;
    return;
  }

  console.log("[check:pdf] Whitepaper PDF verification passed.");
}

await run();
