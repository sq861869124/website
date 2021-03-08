import React from 'react';
import {useMount} from 'react-use'

const Captcha = () => {
  const [captchaSrc] = React.useState('')
  useMount(()=>{

  })
  return (
    <img src={captchaSrc} alt=""/>
  )
}
