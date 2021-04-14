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

const fs = require('fs');
const path = require('path');
const { walker } = require('./file-walk');

const reg = /i18n\.d\(["'](.+?)["']\)/g;
const tempFilePath = path.resolve(__dirname, './temp-zh-words.json');
const zhMap = fs.existsSync(tempFilePath) ? require('./temp-zh-words.json') : {};

const dealFile = (content, filePath, isEnd) => {
  let match = reg.exec(content);
  let newContent = content;
  let changed = false;
  while (match) {
    if (match) {
      const [fullMatch, zhWord] = match;
      // If it is translated, replace the original place with English
      if (zhMap[zhWord]) {
        const replaceText = `i18n.t('${zhMap[zhWord]}')`;
        newContent = newContent.replace(fullMatch, replaceText);
        changed = true;
      } else {
        zhMap[zhWord] = '';
      }
    }
    match = reg.exec(content);
  }

  if (changed) {
    fs.writeFile(filePath, newContent, 'utf8', (writeErr) => {
      if (writeErr) return console.error(`write file：${filePath} error`, writeErr);
    });
  }
  if (isEnd) {
    const fileContent = JSON.stringify(zhMap, null, 2);

    fs.writeFile(tempFilePath, fileContent, 'utf8', (writeErr) => {
      if (writeErr) return console.error('Error writing temporary file temp-zh-words', writeErr);
    });
  }
};


walker({
  root: path.resolve(__dirname, '../src'),
  dealFile,
});

