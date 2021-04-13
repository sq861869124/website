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

const { translate } = require('@paiva/translation-google');
const fs = require('fs');

// 过滤替换会造成i118next翻译出错的单词，比如点和冒号
const filterInvalidWord = (enWord) => {
  return enWord.replace(/:/g, '&#58;');
};

// 注意：翻译完的英文首字母会强制小写，如果需要大写开头的需要手动调整
const doTranslate = async () => {
  const rawFile = fs.readFileSync('tool/temp-zh-words.json');
  const wordList = JSON.parse(rawFile);

  const toTransList = Object.keys(wordList);
  if (toTransList.length === 0) {
    return;
  }

  const promises = toTransList.map(async (word) => {
    const result = await translate(word, {
      tld: 'zh-cn',
      to: 'en',
    });
    console.log(`translate ${word} -----> ${result.text.toLowerCase()}`);
    return { zh: word, en: result.text };
  });
  /**
   * @type {[{value: {en: string, zh: string}, status: string}]}
   */
  const translatedList = await Promise.allSettled(promises);
  /**
   * @type {[{value: {en: string, zh: string}, status: string}]}
   */
  const translatedSuccessfulList = translatedList.filter((item) => item.status === 'fulfilled');
  translatedSuccessfulList.forEach((item) => {
    const { zh, en } = item.value;
    const [first, ...rest] = en;
    wordList[zh] = filterInvalidWord(first.toLowerCase() + rest.join(''));
  });
  fs.writeFileSync('tool/temp-zh-words.json', JSON.stringify(wordList, null, 2));
};

module.exports = doTranslate;

