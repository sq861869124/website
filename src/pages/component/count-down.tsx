import React from 'react';
import {useUnmount} from 'react-use'

interface IProps{
  time:number;
  triggerStart():Promise<any>;
  onFinish?():void;
  btnText:string;
  template:string;
}

const CountDonw = ({time, triggerStart, onFinish, btnText, template}: IProps) => {
  const [countdown, setCountdown] = React.useState(time);
  const [flag, setFlag] = React.useState(false)
  const intervalRef = React.useRef<number>();
  useUnmount(()=>{
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  })
  const countdownStart = React.useCallback(() => {
    setFlag(true)
    if (intervalRef.current !== undefined) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCountdown(c => {
        if(c-1<0){
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
          setFlag(false)
          onFinish && onFinish();
          return 0
        }
        return c - 1
      });
    }, 1000);
  }, []);
  const getVerificationCode = async () => {
    await triggerStart();
    setCountdown(time)
    countdownStart()
  }
  return flag ?  <div>{template.replace(/\{[\S\s]+\}/, `${countdown}`)}</div>:  <a onClick={getVerificationCode}>{btnText}</a>
}

export default CountDonw
