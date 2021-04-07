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

import { createStore } from '~/cube';
import React from 'react';

const envStore = createStore({
  name: 'env',
  state: {
    showHeader: true,
    whiteHeader: false,
    onlyMain: false,
    headerShadow: true,
  },
  reducers: {
    setHeaderInfo(state, payload) {
      Object.assign(state, payload || {})
    },
    resetHeaderInfo(state) {
      state.showHeader = true;
      state.whiteHeader = false;
      state.onlyMain = false;
      state.headerShadow = true;
    }
  }
});

export default envStore


interface HeaderInfo {
  showHeader: boolean;
  whiteHeader: boolean;
  onlyMain: boolean;
  headerShadow: boolean;
}

type SetHeader =  (payload: Partial<HeaderInfo>) => void


export const useSiteEnv = (): [ HeaderInfo, SetHeader ] => {
  const headerInfo = envStore.useStore(s => ({
    showHeader: s.showHeader,
    whiteHeader: s.whiteHeader,
    onlyMain: s.onlyMain,
    headerShadow: s.headerShadow
  }))
  const { setHeaderInfo, resetHeaderInfo } = envStore.reducers;
  React.useEffect(() => {
    return () => {
      resetHeaderInfo()
    }
  }, [])
  return [ headerInfo, setHeaderInfo ]
}
