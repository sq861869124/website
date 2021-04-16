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

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon as CustomIcon } from 'common';
import i18n from '~/i18n';

import './error-page.scss';


const NotFound = () => {
  return (
    <div className="not-found-page basic-error-page">
      <div className="info gray-bg">
        <CustomIcon type="404" color />
        <div className="desc">
          <span>{i18n.t('Oh oh, there is nothing here')}</span>
          <Link aria-label="go back to home page" to="/"> {i18n.t('back to homepage')} </Link>
        </div>
      </div>
    </div>
  );
};


export {
  NotFound,
};
