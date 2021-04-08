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
import Banner from './banner';
import MainCard from './main-card';
import ProjectManagement from './project-manage';
import TestManage from './test-manage';
import PageContent from '~/layout/common/page-content';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import HomeConfig from 'pages/home/config';
import DoubleWing from 'pages/home/double-wing';
import { Link } from 'react-router-dom';
import './index.scss';


const Home = () => {
  return (
    <div className="erda-home pt0">
      <Banner />
      <MainCard />
      <ProjectManagement />
      <DoubleWing {...HomeConfig.codeRepositories} />
      <TestManage {...HomeConfig.testManage} />
      <DoubleWing {...HomeConfig.cicd} />
      <DoubleWing {...HomeConfig.monitor} />
      <DoubleWing {...HomeConfig.log} />
      <DoubleWing {...HomeConfig.multiCloud} />
      <div className="contact-trial">
        <PageContent>
          <CopmFadeInUp>
            <p className="title">您的团队在应用研发过程中还有什么困难？</p>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="center-flex-box btns mt36">
              <div
                className="btn-item free-trial center-flex-box"
                onClick={() => {
                  window.open('/login-dice');
                }}
              >免费试用
              </div>
              <Link className="btn-item contact center-flex-box" to="/contact">联系我们</Link>
            </div>
          </CopmFadeInUp>
        </PageContent>
      </div>
    </div>
  );
};

export default Home;
