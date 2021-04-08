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

import { getNavList, getCaseList } from '~/services/case';
import { createStore } from '~/cube';
import { get } from 'lodash';

interface IState {
  nav: Array<CASE.NavItem>;
  products: Array<{ id: number }>
  caseList: Array<CASE.ListItem>
  currentPageNo: number
  hasMore: boolean;
}

const initState: IState = {
  nav: [],
  products: [],
  caseList: [],
  currentPageNo: 1,
  hasMore: false,
};

const caseStore = createStore({
  name: 'case',
  state: initState,
  effects: {
    async getNavList({ call, update }, payload: CASE.NavQuery) {
      const res = await call(getNavList, payload);
      const data = get(res.data, [0, 'data'], []);
      const product = data.find((t: CASE.NavItemChild) => t.name === 'Erda');
      await caseStore.effects.getCaseList({
        site: payload,
        pageNo: 1,
        pageSize: 10,
        products: [{ id: product?.id }],
      });
      update({ nav: res.data || [], products: [{ id: product?.id }] });
    },
    async getCaseList({ call, update, select }, payload: CASE.CaseQuery) {
      const { data } = await call(getCaseList, payload);
      const hasMore = Math.ceil(data.total / payload.pageSize) > payload.pageNo;
      let caseList = data.data || [];
      if (payload.pageNo !== 1) {
        const originList = select((s) => s.caseList);
        caseList = [...originList, ...caseList];
      }
      update({ caseList, hasMore, currentPageNo: payload.pageNo });
    },
  },
  reducers: {},
});

export default caseStore;
