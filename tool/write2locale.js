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

const scanner = require('i18next-scanner');
const vfs = require('vinyl-fs');
const fs = require('fs');
const { isEqual, differenceWith, merge, unset } = require('lodash');
const flattenObjectKeys = require('i18next-scanner/lib/flatten-object-keys').default;
const omitEmptyObject = require('i18next-scanner/lib/omit-empty-object').default;
const zhWordMap = require('./temp-zh-words.json');

const ns = ['default', 'common'];


/**
 * @see  https://github.com/i18next/i18next-scanner#options
 */
const options = {
  // debug: true,
  removeUnusedKeys: true,
  sort: true,
  func: {
    list: ['i18n.t'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  trans: { // 用于组件形式 i18next-react
    component: 'Trans',
    i18nKey: 'i18nKey',
    defaultsKey: 'defaults',
    extensions: [], // 禁用
    fallbackKey(_, value) {
      return value;
    },
    acorn: {
      ecmaVersion: 10, // defaults to 10
      sourceType: 'module', // defaults to 'module'
      // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
    },
  },
  lngs: ['en', 'zh'],
  ns,
  defaultLng: 'en',
  defaultNs: 'default',
  defaultValue: '__NOT_TRANSLATED__',
  resource: {
    savePath: 'src/locale/{{lng}}.json',
    jsonIndent: 2,
    lineEnding: '\n',
  },
  nsSeparator: ':', // namespace separator
  keySeparator: false, // if working with a flat json, it's recommended to set keySeparator to false
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
};


function revertObjectKV(obj) {
  const result = {};
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((k) => {
      if (typeof obj[k] === 'string') {
        result[obj[k]] = k;
      }
    });
  }
  return result;
}
const enToZhWords = revertObjectKV(zhWordMap);

function sortObject(unordered) {
  const ordered = {};
  Object.keys(unordered).sort().forEach((key) => {
    ordered[key] = typeof unordered[key] === 'object' ? sortObject(unordered[key]) : unordered[key];
  });
  return ordered;
}

function customFlush(done) {
  const { resStore } = this.parser;
  const { resource, removeUnusedKeys, sort, defaultValue } = this.parser.options;

  Object.keys(resStore).forEach((lng) => {
    const namespaces = resStore[lng];
    if (lng === 'en') {
      Object.keys(namespaces).forEach((namespace) => {
        const obj = namespaces[namespace];
        Object.keys(obj).forEach((k) => {
          if (obj[k] === defaultValue) {
            obj[k] = k.replace('&#58;', ':');
          }
        });
      });
    }

    const filePath = resource.savePath.replace('{{lng}}', lng);
    let oldContent = {};
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      oldContent = JSON.parse(content);
    }

    // remove obsolete keys
    if (removeUnusedKeys) {
      const namespaceKeys = flattenObjectKeys(namespaces);
      const oldContentKeys = flattenObjectKeys(oldContent);
      const unusedKeys = differenceWith(
        oldContentKeys,
        namespaceKeys,
        isEqual,
      );

      for (let i = 0; i < unusedKeys.length; ++i) {
        unset(oldContent, unusedKeys[i]);
      }

      oldContent = omitEmptyObject(oldContent);
    }

    // merge old content
    let output = merge(namespaces, oldContent);
    if (sort) {
      output = sortObject(output);
    }

    // replace existing translation
    if (lng === 'zh') {
      Object.keys(output).forEach((namespace) => {
        const obj = output[namespace];
        Object.keys(obj).forEach((k) => {
          if (obj[k] === defaultValue) {
            const zh = enToZhWords[k] || enToZhWords[`${namespace}:${k}`];
            if (zh) {
              obj[k] = zh;
            }
          }
        });
      });
    }

    fs.writeFile(filePath, JSON.stringify(output, null, resource.jsonIndent), 'utf8', (writeErr) => {
      if (writeErr) return console.error(`write locale:${lng} error`, writeErr);
    });
  });

  done();
}

module.exports = {
  writeLocale: (resolve) => {
    const paths = ['./src/**/*.{js,jsx,ts,tsx}', '!./tools/', '!./src/locales/*.json'];

    vfs.src(paths)
      .pipe(scanner(options, undefined, customFlush))
      .pipe(vfs.dest('./')).on('end', () => {
        resolve && resolve();
      });
  },
};
