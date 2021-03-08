import * as React from 'react';
import { map } from 'lodash';
import { withRouter } from 'react-router-dom';
import { NotFound } from 'layout/common/error-page';
import { PageSection, CustomImg, PageTitle, SectionTitle, SectionDot } from '~/common';
import { config } from '~/config';

import './case-detail.scss';

interface IProps {
  match: any;
}

const titleMap = {
  orgIntro: '企业简介',
  orgBg: '企业背景',
  orgAppeal: '企业诉求',
  solution: '解决方案',
  realizing: '实现价值',
};

interface IContent {
  desc: string;
  title: string;
  img?: string;
  tips?: string[];
  className?: string;
}
const ContentRender = (props: IContent) => {
  const { desc, img, tips, title, className = '' } = props;
  return (
    <div className={`content-block ${className}`}>
      <SectionTitle title={title} beautify colorful={title === '实现价值'} />
      <div className="section-text my16">{desc}</div>
      {img ? <CustomImg className="content-block-img" name={img} path="cases" /> : null}
      {tips ? (
        tips.map((tip: string) => (
          <SectionDot key={tip}>
            <div className="section-dot-desc">{tip}</div>
          </SectionDot>
        ))
      ) : null}
    </div>
  );
};

const CaseDetail = (props: IProps) => {
  const { caseName } = props.match.params;
  const data = config.caseData[caseName];
  if (!data) {
    return <NotFound />;
  }
  const { baseInfo, ...rest } = data;
  return (
    <div className="case-detail">
      <PageTitle>
        <div className="case-title">
          <CustomImg path="cases" name={baseInfo.img} isMobile />
          <div className="section-title">{baseInfo.title}</div>
          <div className="section-text pre-line">{baseInfo.desc}</div>
        </div>
      </PageTitle>

      {rest
        ? (
          <PageSection>
            {
              map(rest, (val: any, key: string) => (
                <ContentRender key={key} title={titleMap[key]} {...val} />
              ))
            }
          </PageSection>
        )
        : null}
    </div>
  );
};

export default withRouter(CaseDetail);
