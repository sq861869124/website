import React from 'react';
import ReactDOM from 'react-dom';
import { DICE_URL } from '~/common/constants';
import {ConfigProvider} from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './common/utils/interceptors'
import App from './app';
import "animate.css/animate.min.css";

const Root = ()=>{
  return (
    <ConfigProvider locale={zhCN}>
      <App/>
    </ConfigProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
