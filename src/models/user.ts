import { getCurrentUser, login, logout } from '~/services/login';

import { createStore } from '~/cube';

interface IState {
  user: USER.IUser
}

const initState: IState = {
  user: {} as USER.IUser
}

const userStore = createStore({
  name: 'env',
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
        update({ user: res.data })
      }
    },
    async logout({ call }) {
      await call(logout);
      userStore.reducers.clearUser()
    }
  },
  reducers: {
    clearUser(state) {
      state.user = {} as USER.IUser
    }
  }
});

export default userStore;
