// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Markdown from 'marked';
import hljs from 'highlight.js/lib/core';

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
