import Markdown from '@terminus/marked';
import hljs from 'highlight.js/lib/highlight.js';

import 'highlight.js/styles/github.css';

import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import yaml from 'highlight.js/lib/languages/yaml';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);

const supportLanguages = [
  'xml',
  'bash',
  'markdown',
  'yaml',
  'java',
  'javascript',
];

let inited = false;
const renderer = new Markdown.Renderer();

export default (content?: string, renderFns = {}) => {
  if (!content) return content;

  if (!inited) {
    inited = true;
    Markdown.setOptions({
      renderer,
      breaks: true,
      gfm: true,
      linkTarget: '__blank',
      // 没有用户输入信息，不用检查
      sanitize: true,
      sanitizer(text: string) {
        return text;
      },
      highlight(code: any, lang: string) {
        let _lang = lang;
        if (!supportLanguages.includes(lang)) {
          _lang = 'xml';
        }
        return hljs.highlight(_lang, code).value;
      },
    });
  }

  Object.assign(renderer, renderFns);

  return Markdown(content);
};
