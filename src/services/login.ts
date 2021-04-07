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
export const ucLogout = () => {
  return axios({
    url: '/api/user/web/login/logout',
    method: 'post'
  }).then(res => res.data).catch(e => e)
}
