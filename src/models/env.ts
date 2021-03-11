import axios from 'axios';
import { createStore } from '~/cube';

const envStore = createStore({
  name: 'env',
  state: {
    fullSite: false
  },
  effects: {
    async getEnv({ update }) {
      const result = await axios.get('/env') as any;
      if (result.status === 200) {
        update(result.data);
      }
    }
  }
});

envStore.effects.getEnv();

export const useEnv = () => envStore.useStore(s => s);
