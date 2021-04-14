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
import { Icon as CustomIcon, IF } from 'common';
import { useMobile } from 'common/utils';
import { config } from '~/config';
import { Ifooter, IFooterItem, ISubItem } from '~/config/erda';
import i18n from '~/i18n';


import './footer.scss';

interface IProps {
  className?: string;
  config: IFooterItem;
}

const FooterItem = ({ config: propsConf, className = '' }: IProps) => {
  const { name, icon, subList } = propsConf;
  const [imgVisible, setImgVisible] = React.useState(false);
  const isMobile = useMobile();

  React.useEffect(() => {
    // 展示图片后，禁止body滚动
    document.body.style.overflow = imgVisible ? 'hidden' : '';
  }, [imgVisible]);

  return (
    <div className={`footer-item ${className}`}>
      <div className="footer-item-title">
        {
          icon ? <CustomIcon color type={icon} /> : null
        }
        <span>{name}</span>
      </div>
      {
        subList.map((sub: ISubItem) => {
          const { img, name, url, jumpOut, className: subCls, props, width, height, value } = sub;
          let link = name as any;
          if (url) {
            link = jumpOut
              ? <a aria-label={`open ${name}`} href={url} target="_blank" rel="noopener noreferrer" {...props}>{name}</a>
              : <Link aria-label={`go to ${name}`} to={url}>{name}</Link>;
          }
          const val = value ? `: ${value} ` : '';
          return (
            <React.Fragment key={name}>
              <IF check={!isMobile}>
                <div key={name} className={`footer-item-sub ${subCls}`}>{link}{val}</div>
                {img ? <img src={img} height={height} width={width} className="footer-item-img" alt="footer-item-img" /> : null}
                <IF.ELSE />
                <div
                  key={name}
                  className={`footer-item-sub ${subCls}`}
                  onClick={() => {
                    img && setImgVisible(true);
                  }}
                >
                  {link}
                </div>

                {img ? (
                  <div
                    className={`g-img-enlarge-mobile ${imgVisible ? '' : 'hidden'}`}
                    onClick={() => setImgVisible(false)}
                  >
                    <img src={img} height={height} width={width} className="footer-item-img" alt="footer-item-img" />
                  </div>
                ) : null
                }
              </IF>
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

const RightContent = ({ data }: { data: Ifooter['right'] }) => {
  const { mainLink, subLink } = data;
  return (
    <>
      <div className="center-flex-box main-link">
        {
          mainLink.map((item) => {
            const { name, img, description } = item;
            return (
              <div className="scan-code-wrap" key={name}>
                <img {...img} alt="" />
                <p className="fz12 description">{description}</p>
              </div>
            );
          })
        }
      </div>
      <div className="sub-link mt16 center-flex-box">
        {
          subLink.map((item) => {
            const { url, jumpOut, name } = item;
            return jumpOut
              ? <a className="link-item mx8" aria-label={`open ${name}`} href={url} target="_blank" rel="noopener noreferrer"><CustomIcon type={item.icon} /></a>
              : <Link className="link-item mx8" aria-label={`go to ${name}`} to={url}><CustomIcon type={item.icon} /></Link>;
          })
        }
      </div>
    </>
  );
};

const Footer = () => {
  const { footerMenus, popular, tomo = [], copyRights, police } = config;
  const { left: footerConfig } = footerMenus;
  const { name, children, searchUrl } = popular;

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          {footerConfig.about ? <FooterItem config={footerConfig.about} /> : null}
          <FooterItem config={footerConfig.resource} />
          <FooterItem className="flex-1" config={footerConfig.contactUs} />
        </div>
        <div className="footer-right">
          <RightContent data={config.footerMenus.right} />
        </div>
      </div>
      <div className="footer-links flex-start v-align fz14">
        <div className="title">{name}:</div>
        <div className="item">{
          children.map((item) => {
            const commonUrl = `${searchUrl}${encodeURIComponent(item.name)}`;
            return <a className="ml8" href={item.url || commonUrl} target="_blank" rel="noopener noreferrer">{item.name}</a>;
          })
        }
        </div>
      </div>
      {
        tomo.length ? (
          <div className="footer-links center-flex-box fz12 mt16">
            <div className="title">{i18n.t('links')}</div>
            <div className="item">{
              tomo.map((item) => {
                return <a className="ml8" href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>;
              })
            }
            </div>
          </div>
        ) : null
      }
      <div className="footer-links center-flex-box fz12 mt12">
        <span className="title">© {copyRights.text}</span>
        <a href={copyRights.recordLicenseAddress}>{copyRights.recordLicenseNumber}</a>
        <span className="title mx4">|</span>
        <a className="flex-box" href={police.url}><img src={police.img} width={14} height={14} alt="" />{police.text}</a>
      </div>
    </footer>
  );
};

export default Footer;
