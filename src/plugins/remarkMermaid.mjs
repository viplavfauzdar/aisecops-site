import { visit } from "unist-util-visit";
export default function remarkMermaid() {
  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (!node.lang || node.lang.toLowerCase() !== "mermaid") return;
      const html = `<pre class="mermaid">${escapeHtml(node.value)}</pre>`;
      parent.children[index] = { type: "html", value: html };
    });
  };
}
function escapeHtml(str) {
  return str.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}
