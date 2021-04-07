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

export const COMPANY_SIZE = [
  { value: '20人以下', name: '20人以下' },
  { value: '21-100人', name: '21-100人' },
  { value: '101-500人', name: '101-500人' },
  { value: '501-1000人', name: '501-1000人' },
  { value: '1000人以上', name: '1000人以上' }
]

export const IT_SIZE = [
  { value: '10人以下', name: '10人以下' },
  { value: '11-50人', name: '11-50人' },
  { value: '51-100人', name: '51-100人' },
  { value: '101-200人', name: '101-200人' },
  { value: '200人以上', name: '200人以上' }
]


export const PURPOSE = [
  { value: '企业商务咨询', name: '企业商务咨询' },
  { value: '加入成为合作伙伴', name: '加入成为合作伙伴' },
  { value: '个人学习', name: '个人学习' },
  { value: '其他', name: '其他' }
]

export enum NAME_MAP {
  realname = '真实姓名',
  mobile = '手机号码',
  position = '所处职位',
  email = '企业邮箱地址',
  company = '企业名称',
  company_size = '企业规模',
  it_size = 'IT部门规模',
  purpose = '申请目的',
  otherPurpose = '申请目的'
}
