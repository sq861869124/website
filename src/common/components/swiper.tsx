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
import classnames from 'classnames';
import { Icon as CustomIcon, TouchContainer } from 'common';
import './swiper.scss';

interface IData {
  Comp: any;
}

interface IProps {
  dataList: IData[];
  duration?: number;
  className?: string;
  fullScreen?: boolean;
  autoRun?: boolean;
  withTouch?: boolean;
  visible?: boolean;
  Footer?: any;

}
interface IState {
  index: number;
}

class Swiper extends React.PureComponent<IProps, IState> {
  state = {
    index: 0,
  };

  private swiper: any;

  private st: any;

  private duration: number = this.props.duration || 5;

  private total: number = this.props.dataList.length || 0;

  componentDidMount() {
    this.run();
  }

  componentWillUnmount() {
    this.stop();
  }

  run = () => {
    const { autoRun = true } = this.props;
    const doRun = () => {
      const { index } = this.state;
      const nextIndex = index + 1 > (this.total - 1) ? 0 : index + 1;
      this.changeIndex(nextIndex);
    };
    autoRun && (this.st = setInterval(() => { doRun(); }, this.duration * 1000));
  };


  stop = () => {
    this.st && clearInterval(this.st);
  };

  changeIndex = (index: number) => {
    this.stop();
    this.setState({ index }, () => {
      this.swiper.style.left = `${this.state.index * -100}%`;
    });
    this.run();
  };

  goNext = () => {
    const { index } = this.state;
    const nextIndex = index + 1 > (this.total - 1) ? 0 : index + 1;
    this.changeIndex(nextIndex);
  };

  goPre = () => {
    const { index } = this.state;
    const nextIndex = index - 1 < 0 ? (this.total - 1) : index - 1;
    this.changeIndex(nextIndex);
  };

  render() {
    const { dataList, className = '', visible = true, withTouch = false, Footer = null, fullScreen } = this.props;
    const { index } = this.state;
    // 现在只有一个，先关闭切换
    const onlyOne = true;
    const cls = classnames(
      className,
      'swiper-container',
      fullScreen && 'g-img-enlarge-mobile',
      !visible && 'hidden',
    );

    const Ele = (
      <div className={cls}>
        <div className="swiper-box" ref={(ref) => { this.swiper = ref; }}>
          {
            dataList.map((data, idx) => {
              const { Comp } = data;
              return (
                <div className={`swiper-item ${index === idx ? 'swiper-item-show' : ''}`} key={idx}>
                  {
                    onlyOne ? Comp :
                      React.cloneElement(Comp, {
                        onMouseOver: this.stop,
                        onMouseOut: this.run,
                      })
                  }
                </div>
              );
            })
          }
        </div>
        {!onlyOne && (
          <div className="swiper-footer">
            {
            Footer
              ?
                <Footer checked={index} length={dataList.length} changeIndex={this.changeIndex} duration={this.duration} />
              :
              dataList.map((_, idx) => {
                return (
                  <div className={`swiper-page ${idx === index ? 'swiper-page-focus' : ''}`} key={idx} onClick={() => this.changeIndex(idx)}>
                    <CustomIcon color type={`${idx === index ? 'fyh' : 'fyd'}`} />
                  </div>
                );
              })
          }
          </div>
        )}
      </div >
    );
    return withTouch ? (
      <TouchContainer next={this.goNext} prev={this.goPre}>{Ele}</TouchContainer>
    ) : Ele;
  }
}

export { Swiper };
