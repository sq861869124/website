import React from 'react';
import PageContent from '~/components/common/page-content';
import {Button} from 'antd';

const Banner = () => {

  return (
    <div className="erda-home-banner">
      <div className="erda-home-banner-mask"/>
      <PageContent>
        <div className="erda-home-banner-title">Erda Cloud</div>
        <div className="erda-home-banner-desc mt16">简单、高效的一站式微服务研发运维平台</div>
        <Button className="erda-home-banner-free-trial mt24" onClick={()=>{window.open('/login-dice')}}>免费试用</Button>
        <div className="earth">
          <img width={550} height={550} src="/images/home/banner/earth.png" alt=""/>
        </div>
      </PageContent>
    </div>
  )
}

export default Banner
