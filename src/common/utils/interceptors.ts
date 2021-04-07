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

import axios, { AxiosResponse } from 'axios';
import { message } from 'antd';

const whiteList = {};

axios.interceptors.request.use((config) => {
  const {params = {}, url = ''} = config;
  const {HIDDEN_MESSAGE_REQUEST, ...rest} = params;
  if (HIDDEN_MESSAGE_REQUEST === true) {
    whiteList[url] = true;
  }
  return {
    ...config,
    params: {
      ...rest
    }
  };
});

axios.interceptors.response.use((response: AxiosResponse<IResponse<any>>) => {
  return Promise.resolve(response);
}, (error: any) => {
  if (!whiteList[error.config.url]) {
    console.error('error:', error);
    message.error('很抱歉，当前请求遇到问题，我们将尽快修复！');
  } else {
    delete whiteList[error.config.url];
  }
  return Promise.reject(error);
});

