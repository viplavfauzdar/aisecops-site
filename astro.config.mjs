import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMermaid from "./src/plugins/remarkMermaid.mjs";
export default defineConfig({
  site: "https://aisecops.net",
  integrations: [tailwind({ applyBaseStyles: true }), mdx(), sitemap()],
  markdown: { remarkPlugins: [remarkMermaid], shikiConfig: { theme: "github-dark" } }
});
