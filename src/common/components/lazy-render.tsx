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
      intersectionObserver = new IntersectionObserver(entries => {
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

