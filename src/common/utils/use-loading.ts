import { createStore, use } from '~/cube';

type ValueOf<T extends Record<string, any>, K> = K extends keyof T ? T[K] : never;

const loadingStore = createStore({
  name: 'loading',
  state: {},
  reducers: {
    setLoading(state, storeName: string, effectName, status: boolean) {
      state[storeName] = state[storeName] || {};
      state[storeName][effectName] = status;
    },
  },
});

/**
 * @deprecated use useLoading instead
 */
function useSpace<T>(store: T & { name: string }): EffectKeys<ValueOf<T, 'effects' | '_effects'>> {
  const loadingSpace = loadingStore.useStore(s => s[store.name]) || {};
  // add proxy to avoid return undefined in isLoading
  return new Proxy(loadingSpace, {
    get: (target, propKey) => {
      return !!Reflect.get(target, propKey);
    },
  });
}

type EffectKeys<T> = {
  [K in keyof T]: boolean
};

type EKs<T> = keyof EffectKeys<ValueOf<T, 'effects'> | ValueOf<T, '_effects'>>;

export function useLoading<T>(store: T & { name: string }, effectNames: Array<EKs<T>>): boolean[] {
  return loadingStore.useStore(s => effectNames.map((n: EKs<T>) => (s[store.name] && s[store.name][n]) || false));
}

use({
  beforeEffect({storeName, effectName}) {
    loadingStore.reducers.setLoading(storeName, effectName, true);
  },
  afterEffect({storeName, effectName}) {
    loadingStore.reducers.setLoading(storeName, effectName, false);
  },
});

export default {
  ...loadingStore,
  useSpace,
};
