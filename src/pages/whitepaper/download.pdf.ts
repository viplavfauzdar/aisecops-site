import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const fallbackPath = join(process.cwd(), "public", "pdfs", "aisecops-v0.3-whitepaper.pdf");
  const pdf = await readFile(fallbackPath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="aisecops-v0.3-whitepaper.pdf"'
    }
  });
}
