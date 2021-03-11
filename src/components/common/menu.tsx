import * as React from 'react';
import { Menu, Popover } from 'antd';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { getDocUrl } from '~/common/utils';
import { SpriteIcons } from 'common';
import './menu.scss';
import { config } from '~/config';

const { Item: MenuItem, SubMenu } = Menu;

export const getMenuList = () => {
  const [ docUrl, setDocUrl ] = React.useState('javascript:void(0)');
  React.useEffect(() => {
    getDocUrl().then((url: string) => setDocUrl(url));
  }, []);

  return config.getHeaderMenus({ docUrl });
};

const IntroMenu = () => {
  const menuList = getMenuList();

  return (
    <nav className="site-menu">
      <Menu mode="horizontal" selectedKeys={[]}>
        {map(menuList, (menu: any, index: number) => {
          const { name, subList, url, jumpOut, props, status } = menu;
          const isFirst = index === 0;
          if (status === 'unrealized') {
            return (
              <MenuItem key={name}>
                <Popover placement="bottom" content="敬请期待">
                  <a href="">{name}</a>
                </Popover>
              </MenuItem>
            )
          } else {
            if (subList) {
              return (
                <SubMenu key={name} title={name} className={`${isFirst ? 'first-menu' : ''}`} popupOffset={[ 12, - 20 ]}>
                  {map(subList, (subMenu: any) => {
                    return (
                      <MenuItem className="site-sub-menu-item" key={subMenu.url}>
                        {subMenu.img ? <SpriteIcons path="common" className={`site-sub-menu-img ${subMenu.img}`}/> : null}
                        <Link aria-label={`go to ${subMenu.name}`} to={subMenu.url}>{subMenu.name}</Link>
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return (
                <MenuItem key={url}>
                  {
                    jumpOut
                      ? <a href={url} {...props} target="_blank" rel="noopener noreferrer">{name}</a>
                      : <Link aria-label={`open ${name}`} to={url}> {name} </Link>
                  }
                </MenuItem>
              );
            }
          }
        })}
          </Menu>
          </nav>
          );
        };

        export default IntroMenu;
