import { Service } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

@Service()
export class MarkdownService {
  private readonly marked = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';

        return hljs.highlight(code, { language }).value;
      },
    })
  );

  render(content: string): string {
    return this.marked.parse(content, { async: false });
  }
}
