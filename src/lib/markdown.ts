import { marked } from "marked";
import { createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: ["github-dark"],
  langs: ["js", "ts", "html", "css", "json", "bash"],
});

export async function parseMarkdown(markdown: string) {
  const tokens = marked.lexer(markdown);

  let html = "";

  for (const token of tokens) {
    if (token.type === "code") {
      html += highlighter.codeToHtml(token.text, {
        lang: token.lang || "text",
        theme: "github-dark",
      });
    } else {
      html += marked.parser([token]);
    }
  }

  return html.replaceAll("<table>", '<div class="overflow-x-auto"><table>').replaceAll("</table>", "</table></div>");
}
