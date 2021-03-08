import React from 'react';
import PageContent from '~/components/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
const ProjectManagement = () => {

  return (
    <div className="erda-home-pm">
      <PageContent>
        <div className="card-title">
          适合各种应用研发的<span className="card-title-height-light">项目管理工具</span>
        </div>
        <div className="card-desc mt20">
          团队不同职能成员高效协作，内置丰富的项目成员角色，让团队管理对于目标管理、投入资源成本、成员研发统计数据更有效有序管理日常研发工作任务和缺陷，让产品/项目经理规划产品需求池、迭代计划以及迭代进度跟踪变得更简单有效。
        </div>
        <div className="mt44 img-wrapper">
          <ImgLazy className="main-img" src="/images/home/Pic2.png"/>
          <ImgLazy className="male" src="/images/home/Pic2-1.png"/>
          <ImgLazy className="female" src="/images/home/Pic2-2.png"/>
        </div>
      </PageContent>
    </div>
  )
}

export default ProjectManagement
