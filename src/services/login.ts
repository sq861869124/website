import axios from 'axios';
import { getCookies } from 'common/utils';

export const login = (): Promise<{ url: string }> => {
  return axios({
    url: '/api/openapi/login',
    method: 'get'
  }).then(res => {
    console.log(res)
    return res.data
  })
}

export const getCurrentUser = (): Promise<IResponse<USER.IUser>> => {
  return axios({
    url: '/api/users/me',
    params: {
      HIDDEN_MESSAGE_REQUEST: true
    },
    method: 'get'
  }).then(res => res.data).catch(e => e)
}

export const logout = (): Promise<{ url: string }> => {
  const OPENAPICSRFTOKEN = getCookies('OPENAPI-CSRF-TOKEN');
  return axios({
    url: '/api/openapi/logout',
    method: 'post',
    headers: {
      'OPENAPI-CSRF-TOKEN': OPENAPICSRFTOKEN
    }
  }).then(res => res.data)
}
