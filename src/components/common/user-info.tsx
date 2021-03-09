import React from 'react';
import { Avatar } from 'antd';

const UserInfo = ({ data }: { data: USER.IUser }) => {
  return (
    <div className="user-info">
      <Avatar className="mr12" src={data.avatar}>
        {data.nick.slice(0, 1).toUpperCase()}
      </Avatar>{data.nick}
    </div>
  )
}

export default UserInfo
