import React from 'react';
import PageContent from '~/components/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import { CopmFadeInUp } from 'pages/component/animate-comp'


const MainCard = () => {
  return (
    <PageContent className="erda-home-main-card">
      <CopmFadeInUp>
        <div className="card-title">为什么选择 Erda Cloud?</div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="card-desc mt16">
          Erda Cloud 是一款在线 DevOps 平台，一站式提供项目协作、代码托管、CI/CD、测试管理和微服务治理平台，让开发者更专注于自身业务架构设计开发，团队高效沟通、迭代开发过程缩短、轻松方便的运维等，都可以交给 Erda Cloud 来提供方案解决。
        </div>
      </CopmFadeInUp>
      <div className="img-wrapper mt20">
        <CopmFadeInUp>
          <ImgLazy width={800} height={260} src="/images/home/main.png"/>
        </CopmFadeInUp>
      </div>
    </PageContent>
  )
}

export default MainCard
