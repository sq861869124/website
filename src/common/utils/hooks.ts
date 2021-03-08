import React from 'react';
import { useSetState, useUnmount } from 'react-use';
type UpdateFn<T> = (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void;
type UpdatePartFn<U> = (patch: U | Function) => void;

type UpdaterFn<T> = {
  [K in keyof T]: UpdatePartFn<T[K]>
};

// 测试 useUpdate 类型
// const Test = () => {
//   const [state, updater] = useUpdate({
//     str: '',
//     num: 0,
//     bool: true,
//     undef: undefined,
//     nul: null,
//     strList: ['one', 'two'],
//     numList: [1, 2],
//     multiList: ['one', 1, false], // 允许包含的类型
//     emptyList: [], // 允许任何数组对象
//     emptyObj: {}, // 允许任何对象
//     obj: { k: 'v', n: 2 }, // 允许相同形状对象
//     objList: [{ ok: true, msg: 'yes' }], // 允许设置任意对象
//   });
//   updater.nul({ any: true });
//   updater.multiList([1, '']);
//   updater.emptyList([1, '']);
//   updater.emptyObj({ a: 2 });
//   updater.objList([{ ok: false, msg: '' }]);
//   return null;
// };


type NullableValue<T> = {
  [K in keyof T]: T[K] extends null ? null | Record<string, any> // 初始状态里对象值可能是null
    : T[K] extends never[] ? any[] // 初始值是空数组，则认为可放任意结构数组
      : T[K] extends { [p: string]: never } ? Record<string, any> // 初始值是空对象，不限制内部结构，是object类型即可
        : T[K]
};

type ResetFn = () => void;

/* eslint-disable arrow-parens */
/**
 * 状态更新
 * @param initState 初始状态
 * @return [state, updateAll, updater]
 */
export const useUpdate = <T extends object>(
  initState: NullableValue<T>
): [NullableValue<T>, UpdaterFn<NullableValue<T>>, UpdateFn<NullableValue<T>>, ResetFn] => {
  const [state, _update] = useSetState<NullableValue<T>>(initState || {});
  // 使用ref，避免updater的更新方法中，在闭包里使用上次的state
  const ref = React.useRef(state);
  const updateRef = React.useRef(_update);
  ref.current = state;

  const update: any = React.useCallback((args: any) => updateRef.current(args), []);

  const updater: any = React.useMemo(() => {
    const result = {};
    Object.keys(ref.current).forEach((k) => {
      result[k] = (patch: Function | any) => {
        const newPart = patch instanceof Function ? patch(ref.current[k], ref.current) : patch;
        ref.current[k] = newPart;
        return updateRef.current({ [k]: newPart } as Partial<NullableValue<T>>);
      };
    });
    return result;
  }, []);

  const reset = React.useCallback(() => updateRef.current(initState), [initState]);

  useUnmount(() => {
    updateRef.current = () => {};
  });

  return [state, updater, update, reset];
};
