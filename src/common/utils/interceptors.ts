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

