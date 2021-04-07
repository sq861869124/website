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
import { withRouter } from 'react-router-dom';
import PageContent from '~/layout/common/page-content';
import './index.scss';


const JoinUs = () => {
  return (
    <div className="join-erda gray-bg">
      <div className="full-width-header">
        <div className="join-erda-header v-flex-box">
          <p className="title-name fz20">即刻试用企业数字化平台（Erda Cloud）</p>
          <p className="title-desc mt12 fz16">请填写您的真实信息，以便尽快通过审核并开启试用</p>
        </div>
      </div>
      <PageContent className="py40">
        <p className="title fz24 mb40">我们期待你的加入</p>
        <div className="title fz20 mb40">
          虚位以待
        </div>
      </PageContent>
    </div>
  );
};

export default withRouter(JoinUs);
