import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon as CustomIcon, IF } from 'common';
import { useMobile, getDocUrl } from 'common/utils';
import { config } from '~/config';


import './footer.scss';

interface IProps {
  className?: string;
  config: IFooterItem;
}

interface IFooterItem {
  name: string;
  icon: string;
  subList: ISubItem[];
}
interface ISubItem {
  name: string;
  img?: string;
  width?:number;
  height?:number;
  url?: string;
  className?: string;
  jumpOut?: boolean;
  props?: object;
}


const getFooterConfig = () => {
  const [docUrl, setDocUrl] = React.useState('javascript:void(0)');
  React.useEffect(() => {
    getDocUrl().then((url: string) => setDocUrl(url));
  }, []);
  return config.getFooterMenus({ docUrl });
};

const FooterItem = ({ config, className = '' }: IProps) => {
  const { name, icon, subList } = config;
  const [imgVisible, setImgVisible] = React.useState(false);
  const isMobile = useMobile();

  React.useEffect(() => {
    //展示图片后，禁止body滚动
    document.body.style.overflow = imgVisible ? 'hidden' : '';
  }, [imgVisible]);

  return (
    <div className={`footer-item ${className}`} >
      <div className="footer-item-title">
        {
          icon? <CustomIcon color type={icon} /> : null
        }
        <span>{name}</span>
      </div>
      {
        subList.map((sub: ISubItem) => {
          const { img, name, url, jumpOut, className: subCls, props, width, height } = sub;
          let link = name as any;
          if (url) {
            link = jumpOut
              ? <a aria-label={`open ${name}`} href={url} target="_blank" rel="noopener noreferrer" {...props}>{name}</a>
              : <Link aria-label={`go to ${name}`} to={url}>{name}</Link>;
          }
          return (
            <React.Fragment key={name}>
              <IF check={!isMobile}>
                <div key={name} className={`footer-item-sub ${subCls}`}>{link}</div>
                {img ? <img src={img} height={height} width={width} className="footer-item-img" alt="footer-item-img" /> : null}
                <IF.ELSE />
                <div key={name}
                  className={`footer-item-sub ${subCls}`}
                  onClick={() => { img && setImgVisible(true); }}
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
    </div >
  );
};

const Footer = () => {
  const footerConfig: any = getFooterConfig();

  return (
    <footer className="site-footer">
      <div className="footer-content block-800">
        <div className="footer-left">
          {footerConfig.about ? <FooterItem config={footerConfig.about} /> : null}
          <FooterItem config={footerConfig.resource} />
          <FooterItem config={footerConfig.serviceMarket} />
        </div>
        <div className="footer-right">
          <FooterItem config={footerConfig.email} />
          {footerConfig.homePage ? <FooterItem config={footerConfig.homePage} /> : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
