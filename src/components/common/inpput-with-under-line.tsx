import React from 'react';
import {Input} from 'antd';
import {InputProps} from 'interface/common';
import classNames from 'classnames';
import {useUpdate} from 'common/utils/hooks';

import './inpput-with-under-line.scss'


interface IProps extends InputProps {
  className?:string;
  filedName?: string;

}
const InputWithUnderLine  = (props:IProps) => {
  const {className, onFocus, onBlur, onChange, filedName, placeholder ,value, suffix,...rest} = props;
  const [{isFocus, inputVal}, updater, update] = useUpdate({
    isFocus: false,
    inputVal: value,
  })

  React.useEffect(()=>{
    update({
      inputVal: value
    })
  }, [value])


  const handleFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    updater.isFocus(true)
    onFocus && onFocus(e)
  }, [value])

  const handleBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    updater.isFocus(false)
    onBlur && onBlur(e)
  }, [value])

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
    const val =  e.target.value
    update({
      inputVal: val,
    })
    onChange && onChange(e)

  },[ ])

  const cls = classNames('erda-input-control', {
    // @ts-ignore
    [className]: !!className,
    'input-focus': isFocus || !!inputVal
  })
  return (
    <div className={cls}>
      <div className="input-name">{filedName}</div>
      <div className="input-wrap">
        <Input
          className="px0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={inputVal}
          {...rest}
        />
        <div className="suffix flex-box">{suffix}</div>
      </div>
      <div className="under-line"></div>
    </div>
  )
}

export default InputWithUnderLine
