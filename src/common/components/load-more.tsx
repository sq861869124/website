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

import { debounce, throttle } from 'lodash';
import { isPromise } from 'common/utils';
import * as React from 'react';
import { Spin } from 'antd';

const noop = () => {};

interface IProps {
  hasMore?: boolean;
  isLoading: boolean;
  initialLoad?: boolean;
  triggerBy?: string;
  domSelector?: string;
  threshold?: number;
  load: () => Promise<any>;
}

export class LoadMore extends React.Component<IProps> {
  eventType: string;

  target: Element;

  eventTarget: Element | Window;

  targetDom: Element;

  threshold: number;

  lazyCheck = debounce(() => this.checkHeight(), 100);

  onScroll = throttle(() => {
    if (!this.props.isLoading) {
      const { scrollHeight, scrollTop, clientHeight } = this.targetDom;
      if (scrollHeight - scrollTop - clientHeight < this.threshold && this.props.hasMore) {
        this.load();
      }
    }
  }, 100);

  // 滚动加载时chrome下Content Download时间会有2-3s的延长
  // see https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome
  fkChrome = (e: WheelEvent) => {
    if (e.deltaY === 1) {
      e.preventDefault();
    }
  };

  // if not has scrollBar then load more
  checkHeight = () => {
    const { scrollHeight, clientHeight } = this.targetDom;
    const { isLoading, hasMore } = this.props;
    const hasScrollBar = scrollHeight > clientHeight;
    if (!hasScrollBar && hasMore && !isLoading) {
      this.load(this.checkHeight);
    }
  };

  componentDidMount() {
    // chrome v56 后会默认给 scroll 监听事件设置 passive: ture 以表明不会 preventDefault
    // 目的是跳过浏览器检测 handler 中是否有 preventDefault 的步骤
    // see https://juejin.im/post/5ad804c1f265da504547fe68
    window.addEventListener('mousewheel', this.fkChrome as EventListenerOrEventListenerObject, { passive: false });
    const { initialLoad = false } = this.props;
    this.init();
    if (initialLoad) {
      return this.load(this.checkHeight);
    }
    this.attachEvent();
  }

  componentWillUnmount() {
    this.detachEvent();
    window.removeEventListener('mousewheel', this.fkChrome as EventListenerOrEventListenerObject);
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.hasMore && !prevProps.hasMore) {
      this.attachEvent();
    }
    if (!this.props.isLoading && prevProps.isLoading && this.props.hasMore) { // fix issue when initialLoad is false and screen is too big and hasMore is true, but only one page displayed.
      this.checkHeight();
    }
  }

  init = () => {
    const { triggerBy = 'scroll', domSelector = '#root', threshold = 300 } = this.props;
    this.eventType = triggerBy;
    this.threshold = threshold;
    this.target = document.querySelectorAll(domSelector)[0];
    this.targetDom = this.target || document.documentElement || document.body;
    this.eventTarget = window;
  };

  // detachEvent before load and reAttach after get data
  load = (cb = noop) => {
    this.detachEvent();
    const res = this.props.load();
    if (isPromise(res)) {
      res.then(() => {
        const { hasMore } = this.props;
        if (hasMore) {
          this.attachEvent();
        }
        cb();
      });
    } else {
      console.warn('LoadMore prop `load` should return a promise');
    }
  };

  attachEvent = () => {
    this.eventTarget.addEventListener(this.eventType, this.onScroll);
    window.addEventListener('resize', this.lazyCheck);
  };

  detachEvent = () => {
    this.eventTarget.removeEventListener(this.eventType, this.onScroll);
    window.removeEventListener('resize', this.lazyCheck);
  };

  render() {
    return this.props.isLoading
      ? <Spin tip={'loading...'}><div style={{ minHeight: '60px' }} /></Spin>
      : null;
  }
}
