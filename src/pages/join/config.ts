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

export type IJobNature = 'product' | 'technology' | 'design'
export type IRecruitmentType = 'school' | 'society'

export interface IJob {
  name: string;
  code: string;
  detail: {
    description: string[],
    requirements: string[],
  };
}

export type  IJobs = {
  [jobNature in IJobNature]: {
    [recruitmentType in IRecruitmentType]: Array<IJob>
  }
}


const jobs: IJobs = {
  product: {
    school: [],
    society: []
  },
  technology: {
    school: [],
    society: []
  },
  design: {
    school: [],
    society: []
  }
}

export default jobs
