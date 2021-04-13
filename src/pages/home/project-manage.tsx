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
import PageContent from '~/layout/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { useMobile } from 'common/utils';
import { isZh } from '~/i18n';

const ProjectManagement = () => {
  const isMobile = useMobile();
  const zn = isZh();


  return (
    <div className="erda-home-pm">
      <PageContent>
        <CopmFadeInUp>
          <div className="card-title">
            项目管理
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="card-desc mt20">
            团队不同职能成员高效协作，内置丰富的项目成员角色，让团队管理者对于目标管理、 投入资源成本、成员研发统计数据更直观，让开发者更有效有序管理日常研发工作任务和缺陷， 让产品/项目经理规划产品需求池、迭代计划以及迭代进度跟踪变得更简单有效。
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="mt44 img-wrapper">
            <ImgLazy className="main-img" width={800} height={300} src={zn ? '/images/home/Pic2.png' : '/images/home/Pic2-en.png'} />
            {
              isMobile ? null : (
                <>
                  <ImgLazy className="male" width={100} height={100} src="/images/home/Pic2-1.png" />
                  <ImgLazy className="female" width={100} height={100} src="/images/home/Pic2-2.png" />
                </>
              )
            }
          </div>
        </CopmFadeInUp>
      </PageContent>
    </div>
  );
};

export default ProjectManagement;
