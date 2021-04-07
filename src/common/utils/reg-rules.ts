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

/**
 * Created by 含光<jiankang.pjk@alibaba-inc.com> on 2021/3/3 17:58.
 */
const RegularMap = {
  mobile: {pattern: /^(1[3|4|5|7|8|9])\d{9}$/, message: '请输入正确的手机号码'},
  email: {pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, message: '请输入正确email'},
};

export default RegularMap;
