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

export const getNavList = (data: CASE.NavQuery): Promise<CASE.CaseRes<CASE.NavItem[]>> => {
  return axios({
    url: '/api/example/nav',
    method: 'post',
    data
  }).then(res => res.data)
}

export const getCaseList = (data: CASE.CaseQuery): Promise<CASE.CaseRes<{ data: CASE.ListItem[], total: number, empty: boolean }>> => {
  return axios({
    url: '/api/example/list',
    method: 'post',
    data
  }).then(res => res.data)
}

export const getCaseDetail = ({ id }:{id: number}):Promise<CASE.CaseRes<CASE.CaseDetail>> => {
  return axios(`/api/example/${id}`).then(res => res.data)
}
