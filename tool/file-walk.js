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

let files = 0;
const walker = ({ root, dealFile, recursive = true }) => {
  if (!dealFile) {
    throw new Error('missing methods of processing files');
  }
  fs.readdir(root, 'utf8', (err, data) => {
    if (err) {
      console.log(`read directory ${root} error:`, err);
      return;
    }
    data.forEach((item) => {
      // filter hidden directories
      if (item.startsWith('.')) {
        return;
      }
      const subPath = path.resolve(`${root}/${item}`);
      if (!item.includes('.') && recursive) {
        return walker({ root: subPath, dealFile, recursive });
      }
      const filePath = subPath;
      files += 1;
      fs.readFile(filePath, 'utf8', (readErr, content) => {
        if (readErr) {
          console.error(`read file ${filePath} error:`, readErr);
          return;
        }
        dealFile(content, filePath, files === 1);
        files -= 1;
      });
    });
  });
};

module.exports = {
  walker,
};
