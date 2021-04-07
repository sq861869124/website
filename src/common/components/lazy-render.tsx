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

import * as React from 'react';
import 'intersection-observer';

interface IProps {
  minHeight?: string;
  useWhen: boolean;
  children: any;
}

export const LazyRender = (props: IProps) => {
  // 需要给一个最小高度，避免内容无高度时所有wrap都可见时，惰性加载无意义
  const { children, useWhen = true, minHeight = '60px' } = props;
  const [render, toggleRender] = React.useState(false);
  const wrapDom = React.useRef(null);

  React.useEffect(() => {
    let intersectionObserver: any;
    if (wrapDom.current) {
      intersectionObserver = new IntersectionObserver((entries) => {
        // 如果不可见，就返回
        if (entries[0].intersectionRatio <= 0) return;
        toggleRender(true);
        // 已渲染就停止监听
        intersectionObserver && intersectionObserver.disconnect();
      });

      // 开始观察
      intersectionObserver.observe(wrapDom.current);
    }
    return () => {
      intersectionObserver && intersectionObserver.disconnect();
    };
  }, []);

  return useWhen ? (
    <div style={{ minHeight }} ref={wrapDom}>{render ? children : null}</div>
  ) : children;
};

