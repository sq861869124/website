import axios from 'axios';

export const login = ():Promise<{url:string}> => {
  return axios({
    url: '/api/openapi/login',
    method: 'get'
  }).then(res => res.data)
}

export const getCurrentUser = ():Promise<IResponse<USER.IUser>> =>{
  return axios({
    url: '/api/users/me',
    params: {
      HIDDEN_MESSAGE_REQUEST: true
    },
    method: 'get'
  }).then(res => res.data).catch(e=>e)
}

export const logout = ()=>{
  return axios({
    url: '/api/openapi/logout',
    method: 'post'
  }).then(res => res.data)
}
