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

import React from 'react';
import { useSetState, useUnmount } from 'react-use';
import { isFunction } from 'lodash';

type UpdateFn<T> = (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void;
type UpdatePartFn<U> = (patch: U | Function) => void;

type UpdaterFn<T> = {
  [K in keyof T]: UpdatePartFn<T[K]>
};

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
): [ NullableValue<T>, UpdaterFn<NullableValue<T>>, UpdateFn<NullableValue<T>>, ResetFn ] => {
  const [ state, _update ] = useSetState<NullableValue<T>>(initState || {});
  // 使用ref，避免updater的更新方法中，在闭包里使用上次的state
  const ref = React.useRef(state);
  const updateRef = React.useRef(_update);
  ref.current = state;

  const update: any = React.useCallback((args: any) => {
    if (isFunction(args)) {
      return updateRef.current(prev => args(prev))
    } else {
      return updateRef.current(args)
    }
  }, []);

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

  const reset = React.useCallback(() => updateRef.current(initState), [ initState ]);

  useUnmount(() => {
    updateRef.current = () => {
    };
  });

  return [ state, updater, update, reset ];
};
