import React from 'react';
import Banner from './banner';
import MainCard from './main-card';
import ProjectManagement from './project-manage';
import CodeHosting from './code-hosting';
import TestManage from './test-manage';
import CiCd from './ci-cd';
import Monitor from './monitor';
import LogAnalysis from './log-analysis';
import PageContent from '~/components/common/page-content';
import './index.scss'

const Home = () =>{
  return (
    <div className="erda-home pt0">
      <Banner/>
      <MainCard />
      <ProjectManagement/>
      <CodeHosting/>
      <TestManage/>
      <CiCd/>
      <Monitor/>
      <LogAnalysis/>
      <div className="contact-trial">
        <PageContent>
          <p className="title">您的团队在应用研发过程中还有什么困难？</p>
          <div className="center-flex-box btns mt36">
            <div className="btn-item free-trial center-flex-box">免费试用</div>
            <div className="btn-item contact center-flex-box">联系我们</div>
          </div>
        </PageContent>
      </div>
    </div>
  )
}

export default Home
