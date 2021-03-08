import * as React from 'react';
import classnames from 'classnames';
import { Icon as CustomIcon, TouchContainer } from 'common';
import './swiper.scss';

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
interface IData {
  Comp: any;
}
interface IState {
  index: number;
}

class Swiper extends React.PureComponent<IProps, IState> {
  public state = {
    index: 0,
  };

  private swiper: any;

  private st: any;

  private duration: number = this.props.duration || 5;

  private total: number = this.props.dataList.length || 0;

  public componentDidMount() {
    this.run();
  }

  public componentWillUnmount() {
    this.stop();
  }

  public run = () => {
    const {autoRun = true} = this.props;
    const doRun = () => {
      const { index } = this.state;
      const nextIndex = index + 1 > (this.total - 1) ? 0 : index + 1;
      this.changeIndex(nextIndex);
    };
    autoRun && (this.st = setInterval(() => {doRun(); }, this.duration * 1000));
  }



  public stop = () => {
    this.st && clearInterval(this.st);
  }

  public changeIndex = (index: number) => {
    this.stop();
    this.setState({ index }, () => {
      this.swiper.style.left = `${this.state.index * -100}%`;
    });
    this.run();
  }

  public goNext = () => {
    const { index } = this.state;
    const nextIndex = index + 1 > (this.total - 1) ? 0 : index + 1;
    this.changeIndex(nextIndex);
  }

  public goPre = () => {
    const { index } = this.state;
    const nextIndex = index - 1 < 0  ? (this.total - 1) : index - 1;
    this.changeIndex(nextIndex);
  }

  public render() {
    const { dataList, className = '', visible= true, withTouch= false, Footer = null, fullScreen } = this.props;
    const { index } = this.state;
    // 现在只有一个，先关闭切换
    const onlyOne = true;
    const cls = classnames(
      className,
      'swiper-container',
      fullScreen && 'g-img-enlarge-mobile',
      !visible && 'hidden'
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
        {!onlyOne && <div className="swiper-footer">
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
        </div>}
      </div >
    );
    return withTouch ? (
      <TouchContainer next={this.goNext} prev={this.goPre}>{Ele}</TouchContainer>
    ) : Ele;
  }
}

export { Swiper };
