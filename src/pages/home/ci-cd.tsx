import React from 'react';
import PageContent from '~/components/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import Accordion, {IListItem} from 'pages/home/accordion';
import { CopmFadeInUp } from 'pages/component/animate-comp'

const config: IListItem[] = [{
  icon: 'icon5_2',
  activeIcon: 'icon51',
  title: '图形化编排',
  key: 'graphicalOrchestration',
  description: '提供拖拽式的图形化编辑方式，让您免去学习成本，使 CI/CD 编辑变的更简单',
},{
  icon: 'icon61',
  title: '内置丰富的 Action 和 Addon 能力',
  key: 'built-inRichActionAndAddonCapabilities',
  description: '平台内置丰富的流水线节点能力，您可以根据不同语言等维度直接选择能力节点使用即可',
},{
  icon: 'icon71',
  title: '全面的构建类型',
  key: 'comprehensiveBuildType',
  description: '平台全面支持 Java、Go、Node、Python 等各种开发语言框架，支持应用 Docker 镜像、Jar 包、移动应用安装包等软件包的构建',
},{
  icon: 'icon81',
  title: '丰富的发布管理',
  key: 'richReleaseManagement',
  description: '支持根据发布等级的需要，流水线中加入指定审批人审批同意才能部署，也可以通过企业级封网来统一控制企业的部署审批管理',
}]

const CiCd = () => {
  return (
    <div className="erda-home-cicd">
      <PageContent className="flex-box v-align-start two-column">
        <div className="erda-home-cicd-img images-column">
          <CopmFadeInUp>
            <ImgLazy width={620} height={531} className="cici-img" src="/images/home/Pic4.png"/>
          </CopmFadeInUp>
        </div>
        <div className="flex-1 pl28 text-column">
          <CopmFadeInUp>
            <div className="card-title">实现软件交付流程自动化的CI/CD</div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="card-desc mt24">
              提供代码扫描构建、测试、部署的流水线服务，帮助您高效、持续部署您的应用
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <Accordion defaultActiveKey="graphicalOrchestration" list={config} className="mt24"/>
          </CopmFadeInUp>
        </div>
      </PageContent>
    </div>
  )
}

export default CiCd
