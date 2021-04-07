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

declare interface IResponse<T> {
  success: boolean;
  err: {
    code: string;
    msg: string;
  };
  data: T
}

declare module 'resolve-pathname';
declare module USER {
  interface IUser {
    avatar: string;
    email: string;
    id: string;
    name: string;
    nick: string;
    phone: string;
    token: string;
  }
}

declare module CONTACT {
  interface contactUs {
    realname: string;
    mobile: string;
    position: string;
    email: string;
    company: string;
    company_size: string;
    it_size: string;
    purpose: string;
  }
}

declare module CASE {
  interface CaseRes<T> {
    code: string;
    data: T,
    message: string;
  }

  interface NavItemChild {
    id: number;
    name: string;
  }

  interface NavItem {
    data: NavItemChild[];
    title: string;
  }

  interface NavQuery {
    id: number
  }

  interface CaseQuery {
    site: { id: number; },
    pageNo: number;
    pageSize: number;
    products: { id: number }[]
    industries?: { id: number }[]
  }

  interface ListItem {
    exampleData: {
      caseRelatedProducts: {
        id: number;
        name: string;
      }[]
      caseRelatedSolutions: {
        id: number;
        name: string;
        industry: {
          id: number;
          name: string;
        }
      }[];
      content: string;
      coverMaterial: string;
      createdAt: number;
      customerLogo: string;
      customerName: string;
      desc: string;
      title: string;
      id: number;
    }
    id: number;
  }

  type CaseDetail = ListItem['exampleData']
}

type Merge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B) extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

