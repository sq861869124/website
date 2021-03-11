import React from 'react';
import { Avatar, Popover } from 'antd';
import userStore from '~/models/user';
import './user-info.scss'

const UserInfo = ({ data }: { data: USER.IUser }) => {
  const logout = () => {
    userStore.effects.logout()
  }
  const goToDice = () =>{
    window.open('/login-dice')
  }
  const content = (
    <div>
      <div className="erda-user-info-menu-item" onClick={goToDice}>进入平台</div>
      <div className="erda-user-info-menu-item mt8" onClick={logout}>退出登录</div>
    </div>
  )
  return (
    <Popover placement="bottom" className="user-info" content={content} >
      <Avatar className="mr12" src={data.avatar}>
        {data.nick.slice(0, 1).toUpperCase()}
      </Avatar>{data.nick}
    </Popover>
  )
}

export default UserInfo
