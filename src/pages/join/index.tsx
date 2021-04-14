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
import i18n from '~/i18n';
import PageContent from '~/layout/common/page-content';
import './index.scss';


const JoinUs = () => {
  return (
    <div className="join-erda gray-bg">
      <div className="full-width-header">
        <div className="join-erda-header v-flex-box">
          <p className="title-name fz20">{i18n.t('try the enterprise digital platform (Erda Cloud) now')}</p>
          <p className="title-desc mt12 fz16">{i18n.t('please fill in your real information in order to pass the review as soon as possible and start the trial')}</p>
        </div>
      </div>
      <PageContent className="py40">
        <p className="title fz24 mb40">{i18n.t('we look forward to your joining')}</p>
        <div className="title fz20 mb40">
          {i18n.t('position is ready')}
        </div>
      </PageContent>
    </div>
  );
};

export default withRouter(JoinUs);
