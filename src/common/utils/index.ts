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

import resolve from 'resolve-pathname';
import useMedia from 'react-use/lib/useMedia';
// import axios from 'axios';
import { message } from 'antd';
import {FormInstance} from 'interface/common'


const globalSpace = {};
export const getGlobal = (key: string) => globalSpace[key];
export const setGlobal = (key: string, value: any) => { globalSpace[key] = value; };


/**
 * 返回是否在移动端屏幕宽度（768）内
 *
 * @return isMobileSize
 */
export const useMobile = () => {
  return useMedia('(max-width: 768px)');
};

export const getImage = (path: string, name: string, isMobile: boolean) => {
  const imgAttrs = {
    src: `/images/${path}/${name}@2x.png`,
  } as any;
  if (isMobile) {
    imgAttrs.srcSet = `/images/${path}/${name}-m@2x.png 768w, /images/${path}/${name}@2x.png`;
  }
  return imgAttrs;
};

export const getImageSrc = (path: string, name: string, focus?: boolean) => {
  return `/images/${path}/${name}${focus ? '-f' : ''}@2x.png`;
};

export const regRules = {
  mobile: { pattern: /^(1[3|4|5|7|8|9])\d{9}$/, message: '请输入正确的手机号码' },
  email: { pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, message: '请输入正确email' },
};

export const isPromise = (obj: PromiseLike<any>) => {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

interface IGoToOps {
  jumpOut?: boolean;
}
export const goTo = (path: string, ops: IGoToOps = {}) => {
  if (ops.jumpOut) {
    window.open(path);
    return;
  }

  const history = getGlobal('history');
  if (history) {
    history.push(resolve(path, window.location.pathname));
  }
};

export function getCookies(k?: string) {
  const cookies = {};
  window.document.cookie.split(';').forEach((item) => {
    const [key, value] = item.split('=');
    cookies[key.trim()] = value.trim();
  });
  return k ? cookies[k] : cookies;
}

export const enlargeImg = (e: any, isMobile?: boolean) => {
  if (e.currentTarget) {
    const curEle = e.currentTarget;
    const cls = isMobile ? 'g-img-enlarge-mobile' : 'g-img-enlarge';
    if (curEle.classList.contains(cls)) {
      document.body.style.overflow = '';
      curEle.classList.remove(cls);
    } else {
      curEle.classList.add(cls);
      document.body.style.overflow = 'hidden';
    }

  }
};

export const getScrollTop = () => {
  return (
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    window.scrollY ||
    document.body.scrollTop
  );
};
type ClientType =  ('iOS' | 'Android' | 'PC');
/**
 * 判断客户端
 */
export const judgeClient = (): ClientType => {
  const userAgent: string = navigator.userAgent;
  let client: ClientType;
  // Android机中，userAgent字段中也包含safari，因此要先判断是否是安卓
  if (/(Android)/i.test(userAgent)) {
    client = 'Android';
    // XXX 2020/4/23 IOS 13 之后，在Ipad中，safari默认请求桌面网站，导致userAgent和MAC中safari的userAgent一样
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent) || (/safari/i.test(userAgent) && 'ontouchend' in document)) {
    client = 'iOS';
  } else {
    client = 'PC';
  }
  return client;
};

export const formatJSON = (str: string) => {
  let res = str;
  try {
    res = JSON.stringify(JSON.parse(str), null, 2);
  } catch (e) {
    // do nothing
  }
  return typeof res === 'string' ? res : '';
};

export const parseJson = (str: string) => {
  let data: any;
  try {
    data = JSON.parse(str);
  }catch (e) {
    data = {};
  }
  return data;
};

/**
 * 循环引用
 */
export const stringifyPro = (data: Object | any[], space: number, replace?: any): string => {
  let valueCache: any[] = [];
  let keyCache: any[] = [];
  const str = JSON.stringify(data || {}, (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      const index = valueCache.indexOf(value);
      if (index !== -1) {
        return replace ? replace : `[Circular reference: ${keyCache[ index ]}]`;
      }
      valueCache.push(value);
      keyCache.push(key);
    }
    return value;
  }, space);
  valueCache = [];
  keyCache = [];
  return str;
};


export const handleError = (error: {msg: string | undefined}= {msg: undefined}) => {
  message.error(error.msg || '很抱歉，当前请求遇到问题，我们将尽快修复！');
};

/**
 * @description 校验并获取表单数据
 * @see https://ant.design/components/form-cn/#validateFields-%E8%BF%94%E5%9B%9E%E7%A4%BA%E4%BE%8B
 */
export const getFormFieldsValue = <T>(form: FormInstance, nameList?: string[]): Promise<{data: T, error?: Error}> => new Promise((resolve) => {
  form.validateFields(nameList).then((data) => {
    resolve( { data } );
  } ).catch((r) => {
    resolve( { error: r, data: {} as T } );
  } );
} );

export const getParentContainer = (el: HTMLElement): HTMLElement => {
  return el.parentElement as HTMLElement
}
