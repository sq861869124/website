import * as React from 'react';
import { PageSection, CustomImg, SpriteIcons } from '~/common';
import { SectionTitle } from '../common/components/page-sections';

import './about.scss';

const aboutData = {
  // introduction: {
  //   space: 80,
  //   title: <SectionTitle title="企业简介" beautify className="mb20" colorful/>,
  //   desc: (
  //     <>
  //       <div>
  //         为企业创造价值、为伙伴提供支撑、为行业带来改变，是我们的使命。
  //       </div>
  //       <div>
  //         为企业提供从采购端到销售端横向贯通的解决方案，其中采购领域主要有协同采购平台，B2B商城两大产品，销售领域主要有电商平台、渠道分销平台、会员营销平台和全渠道运营平台。端点的产品及解决方案重点聚焦制造、零售、地产和能源四大行业，致力于为规模型企业提供核心业务系统。
  //       </div>
  //     </>
  //   ),
  // },
  aboutDice: {
    title: <SectionTitle title="关于平台" beautify className="mb20" colorful/>,
    desc: (
      <div className="mb32">
        交付标准化协同平台是自研的云原生PaaS平台，支撑了所有的业务产品和解决方案。作为企业构建核心业务系统的IT底座，可以帮助企业加快数字化转型步伐，主要表现为：
      </div>
    ),
    aboutArr: [
      {
        img: 'albb',
        desc:
          '通过深度整合阿里巴巴的技术和商业能力，可以帮助企业实现业务的快速创新',
      },
      {
        img: 'jbzx',
        desc: '基于容器的云管平台通过有效调度资源，可以帮助企业降本增效',
      },
      {
        img: 'kskz',
        desc:
          '研发体系，DevOps，APM为企业业务的快速迭代提供核心引擎；同时沉淀的业务组件可支撑后续的快速扩展',
      },
    ],
  },
  serviceCase: {
    space: 80,
    title: <SectionTitle title="服务案例" beautify className="mb20" colorful/>,
    desc:
      '截至2019年，我们已经服务了众多行业龙头企业，包括以万科、海尔、兖矿集团为代表的世界500强企业；以海信、中南置地、华帝为代表的中国500强企业；以及以新华书店网上商城为代表的国有企业等。',
  },
};

const SectionRender = ({
  title,
  desc,
  children = null,
  ...rest
}: {
  title: any,
  desc: any;
  children?: any;
}) => {
  return (
    <PageSection {...rest}>
      <SectionTitle title={title} />
      <div className="section-text">{desc}</div>
      {children}
    </PageSection>
  );
};

const About = () => {
  return (
    <div className="about pt0">
      <PageSection space={0}>
        <div className="about-header page-header-bgimg">
          <div className="header-name">关于我们</div>
          {/* <div className="header-desc">交付标准化协同平台</div> */}
        </div>
      </PageSection>
      {/* <SectionRender {...aboutData.introduction} /> */}
      {/* <SectionRender {...aboutData.aboutDice}>
        <div className="about-dice">
          {aboutData.aboutDice.aboutArr.map(
            ({ img, desc }: { img: string; desc: string }, i) => (
              <div key={i} className="about-dice-item">
                <SpriteIcons path="about" className={img} />
                <span>{desc}</span>
              </div>
            ),
          )}
        </div>
      </SectionRender> */}
      <SectionRender {...aboutData.serviceCase}>
        <CustomImg className="service-case-img" path="about" name="fwal" alt="service-case-img" isMobile />
      </SectionRender>
    </div>
  );
};

export default About;
