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
import i18n from '~/i18n';
import images from './images';

const ProjectManagement = () => {
  const isMobile = useMobile();

  return (
    <div className="erda-home-pm">
      <PageContent>
        <CopmFadeInUp>
          <div className="card-title">
            {i18n.t('project management')}
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="card-desc mt20">
            {i18n.t('efficient collaboration among team members with different functions')}
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="mt44 img-wrapper">
            <ImgLazy className="main-img" width={800} height={300} src={images.projectManagement} />
            {
              isMobile ? null : (
                <>
                  <ImgLazy className="male" width={100} height={100} src={images.projectManagementMale} />
                  <ImgLazy className="female" width={100} height={100} src={images.projectManagementFemale} />
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
