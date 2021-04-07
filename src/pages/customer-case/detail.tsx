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
import { getCaseDetail } from '~/services/case';
import { RouteComponentProps } from 'react-router';
import { useSiteEnv } from '~/models/env';
import './index.scss';

const CaseDetail = ({ match }: RouteComponentProps) => {
  const [detail, setDetail] = React.useState<CASE.CaseDetail>({} as CASE.CaseDetail);
  const { caseId } = match.params as { caseId: number };
  const [, serHader] = useSiteEnv();
  React.useEffect(() => {
    serHader({ whiteHeader: true });
  }, []);
  React.useEffect(() => {
    getCaseDetail({ id: caseId }).then((res) => {
      setDetail(res.data);
    });
  }, [caseId]);

  return (
    <div className="erda-customer-case-detail pt0">
      <div className="full-width-header" />
      <PageContent className="detail-body mt40">
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: detail.content }} />
      </PageContent>
    </div>
  );
};

export default withRouter(CaseDetail);
