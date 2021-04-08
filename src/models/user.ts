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

import { getCurrentUser, login, logout, ucLogout } from '~/services/login';

import { createStore } from '~/cube';

interface IState {
  user: USER.IUser
}

const initState: IState = {
  user: {} as USER.IUser,
};

const userStore = createStore({
  name: 'user',
  state: initState,
  effects: {

    async login({ call }) {
      const data = await call(login);
      if (data && data.url) {
        window.localStorage.setItem('lastPath', window.location.href);
        window.location.href = data.url;
      }
    },
    async getCurrentUser({ call, update }) {
      const res = await call(getCurrentUser);
      if (res.success) {
        update({ user: res.data });
      }
    },
    async logout({ call }) {
      await call(logout);
      await call(ucLogout);
      userStore.reducers.clearUser();
    },
  },
  reducers: {
    clearUser(state) {
      state.user = {} as USER.IUser;
    },
  },
});

export default userStore;
