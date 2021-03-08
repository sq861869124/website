import * as React from 'react';
import Clipboard from 'clipboard';
import { isString } from 'lodash';
import { message } from 'antd';

const selectorMap = {};
const innerClassName = 'for-copy';
const innerSelector = `.${innerClassName}`;

interface IProps {
  selector?: string;
  opts?: object;
  copyText?: string;
  className?: string;
  tipName?: string;
  onSuccess?(e: React.SyntheticEvent<HTMLSpanElement, Event>): void;
  onError?(e: React.SyntheticEvent<HTMLSpanElement, Event>): void;
  onEdit?(): void;
}
export class Copy extends React.PureComponent<IProps> {
  clipboard: any;

  selector: string | '.for-copy';

  componentDidMount() {
    this.initClipBoard();
  }

  componentDidUpdate() {
    this.initClipBoard();
  }

  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
      selectorMap[this.selector] = undefined;
    }
  }

  initClipBoard() {
    const {
      children, selector, opts = {}, onSuccess, onError, tipName = '',
    } = this.props;
    // click event bind on body, make sure one selector only trigger once
    this.selector = isString(children) ? innerSelector : selector || innerSelector;
    if (this.selector && !selectorMap[this.selector]) {
      selectorMap[this.selector] = true;
      this.clipboard = new Clipboard(this.selector, opts);
      this.clipboard.on('success', (e: any) => {
        if (typeof onSuccess === 'function') {
          onSuccess(e);
        }
        message.success(`复制${e.trigger.getAttribute('data-clipboard-tip') || tipName}成功`, 1);
        e.clearSelection();
      });
      this.clipboard.on('error', (e: any) => {
        if (typeof onError === 'function') {
          onError(e);
        }
        message.error(`复制${e.trigger.getAttribute('data-clipboard-tip') || tipName}失败`, 1);
      });
    }
  }

  render() {
    // 增加被复制项，需求为有时children超长显示不全
    const { children, copyText, className = '', tipName, ...rest } = this.props;
    return isString(children)
      ? <span className={`${innerClassName} ${className}`} data-clipboard-text={copyText || children} {...rest}>{children}</span>
      : children || null;
  }
}
