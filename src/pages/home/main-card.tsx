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
import { Link } from 'react-router-dom';
import { Icon } from 'common';
import i18n from '~/i18n';
import imagesMap from './images';

const config = {
  title: i18n.t('default:why choose erda cloud?'),
  description: i18n.t('a one-stop enterprise digital platform with a multi-cloud architecture'),
};


const MainCard = () => {
  const isMobild = useMobile();
  return (
    <PageContent className="erda-home-main-card">
      <CopmFadeInUp>
        <div className="card-title">{config.title}</div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="card-desc mt16">
          {config.description}
          <Link className="link-to" to="/why-erda">{i18n.t('more')}<Icon type="Rightarrow" /></Link>
        </div>
      </CopmFadeInUp>
      <div className="img-wrapper mt20">
        <CopmFadeInUp>
          {
            isMobild ? null : <ImgLazy lazy={false} width={295} height={430} src={imagesMap.mainLeft} />
          }
          <ImgLazy lazy={false} width={430} height={430} src={imagesMap.mainCenter} />
          {
            isMobild ? null : <ImgLazy lazy={false} width={295} height={430} src={imagesMap.mainRight} />
          }
        </CopmFadeInUp>
      </div>
    </PageContent>
  );
};

export default MainCard;
