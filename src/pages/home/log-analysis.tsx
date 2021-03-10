import React from 'react';
import PageContent from '~/components/common/page-content';
import { Icon as CustomIcon } from 'common';

const config: {title: string; icon: string; description: string}[] = [{
  icon: 'icon14',
  title: '自定义日志分析规则',
  description: '采集完成的日志，平台内置通用服务的分析规则的同时，支持用户通过正则表达式来自定义日志分析规则，日志分析后相关指标可以进行可视化和自定义告警的配置'
},{
  icon: 'icon15',
  title: '指标的统计分析和可视化',
  description: '日志分析后的指标通过自定义数据 Dashboard 来实现日志内容的可视化'
},{
  icon: 'icon16',
  title: '自定义告警设置',
  description: '通过日志分析后的指标，可以进行自定义告警规则的配置，丰富和拓宽了运维告警的范围。'
}];

const LogAnalysis = () => {
  return (
    <div className="erda-home-log-analysis">
      <PageContent>
        <div className="card-title">日志分析</div>
        <div className="card-desc mt24">通过日志分析，提供经营效率优化决策依据，改善应用程序和基础设施性能及运行时间，让您比以往任何时候更能深入了解您的应用程序和基础设施</div>
        <div className="erda-home-log-analysis-body flex-box v-align-start">
          {
            config.map(item=>{
              const {icon, description, title} = item;
              return (
                <div key={title} className="item">
                  <div className="icon-bg center-flex-box">
                    <CustomIcon type={icon}></CustomIcon>
                  </div>
                  <div className="title mt4">{title}</div>
                  <div className="desc mt8">{description}</div>
                </div>
              )
            })
          }
        </div>
      </PageContent>
    </div>
  )
}

export default LogAnalysis
