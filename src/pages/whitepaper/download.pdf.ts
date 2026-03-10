import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const fallbackPath = join(process.cwd(), "public", "whitepaper", "aisecops-whitepaper.pdf");
  const pdf = await readFile(fallbackPath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="aisecops-whitepaper.pdf"'
    }
  });
}

