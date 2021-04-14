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

import i18next, { i18n as i18nInterface } from 'i18next';
import antd_zhCN from 'antd/lib/locale-provider/zh_CN';
import antd_enUS from 'antd/lib/locale-provider/en_US';
import app_zhCN from '~/locale/zh.json';
import app_enUS from '~/locale/en.json';
import { Locale } from 'antd/es/locale-provider';

type i18nType = i18nInterface & { d: (zhWords: string) => string };
export type LongLocaleMark = 'zh-CN'| 'en-US';
export type ShortLocaleMark = 'zh' | 'en';
export type LocaleMap = {
  [k in ShortLocaleMark]: {
    key: k;
    antd: Locale;
    app: any;
  }
};


const i18n = i18next as i18nType;
i18n.d = (str: string): string => str;


const userLanguage: ShortLocaleMark = (window.navigator.userLanguage || window.navigator.language) === 'zh-CN' ? 'zh' : 'en';

const localeMap: LocaleMap = {
  en: {
    key: 'en',
    app: app_enUS,
    antd: antd_enUS,
  },
  zh: {
    key: 'zh',
    app: app_zhCN,
    antd: antd_zhCN,
  },
};

const defaultLocale = (window.localStorage.getItem('locale') || userLanguage) as ShortLocaleMark;
window.localStorage.setItem('locale', defaultLocale);
let currentLocale = localeMap[defaultLocale];
export const setLocale = (lng: ShortLocaleMark) => {
  const localeObj = localeMap[lng] || localeMap[defaultLocale];
  return i18n
    .changeLanguage(lng.split('-')[0])
    .then(() => {
      currentLocale = localeObj;
      window.localStorage.setItem('locale', currentLocale.key);
      return currentLocale;
    });
};

export const switchLocale = () => {
  const current: ShortLocaleMark = window.localStorage.getItem('locale') as ShortLocaleMark || 'zh';
  const next: ShortLocaleMark = current === 'zh' ? 'en' : 'zh';
  window.localStorage.setItem('locale', next);
  window.location.reload();
};

export const getCurrentLocale = () => {
  return currentLocale;
};

export const isZh = (): boolean => {
  return currentLocale.key === 'zh';
};

export const getLang = (): LongLocaleMark => {
  return getCurrentLocale().key === 'zh' ? 'zh-CN' : 'en-US';
};


export const initI18n = i18n
  .init({
    lng: defaultLocale,
    fallbackLng: 'zh',
    debug: process.env.NODE_ENV !== 'production',

    resources: {
      zh: app_zhCN,
      en: app_enUS,
    },

    // have a common namespace used around the full app
    ns: Object.keys(app_zhCN),
    defaultNS: 'default',

    keySeparator: false, // we use content as keys

    interpolation: {
      prefix: '{',
      suffix: '}',
      formatSeparator: ',',
      format(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      },
    },

    react: {
      wait: true,
    },
  });
export default i18n;
