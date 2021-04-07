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
import { Menu } from 'antd';
import { map } from 'lodash';
import { Icon as CustomIcon, SpriteIcons } from 'common';
import { config } from '~/config';
import { withRouter } from 'react-router-dom';

import './menu-mobile.scss';

const { Item: MenuItem, SubMenu } = Menu;

const MobileMenu = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    // 展示菜单后，禁止body滚动
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);
  React.useEffect(() => {
    // 跳转后自动关闭
    setVisible(false);
    props.onToggle(false);
  }, [window.location.pathname]);

  const goToUrl = (url: string, jumpOut?: boolean) => {
    setVisible(false);
    if (jumpOut) {
      window.open(url);
      return;
    }
    props.history.push(url);
  };
  const toggle = () => {
    props.onToggle && props.onToggle(!visible);
    setVisible(!visible);
  };

  const [openKeys, setOpenKeys] = React.useState([] as string[]);

  const toggleOpenKeys = (key: string) => {
    if (openKeys.includes(key)) {
      setOpenKeys([]);
    } else {
      setOpenKeys([key]);
    }
  };
  const menuList = config.headerMenus;

  return (
    <nav className={'site-menu-mobile'}>
      <CustomIcon type={`${visible ? 'gb' : 'dh'}`} className="menu-icon" onClick={toggle} />
      <Menu mode="inline" openKeys={openKeys} className={`${visible ? 'show' : 'hidden'} mobile-menu`}>
        {
          map(menuList, (menu: any) => {
            const { name, subList, url, jumpOut } = menu;
            if (subList) {
              return (
                <SubMenu key={name} title={name} onTitleClick={() => { toggleOpenKeys(name); }}>
                  {
                    map(subList, (subMenu: any) => {
                      return (
                        <MenuItem className="mobile-sub-menu" key={subMenu.name} onClick={() => { goToUrl(subMenu.url); }}>
                          {subMenu.img ? <SpriteIcons path="common" className={`site-sub-menu-img ${subMenu.img}`} /> : null}
                          {subMenu.name}
                        </MenuItem>
                      );
                    })
                  }
                </SubMenu>
              );
            } else {
              return (
                <MenuItem key={name} onClick={() => { goToUrl(url, jumpOut); }}>{name}</MenuItem>
              );
            }
          })
        }
      </Menu>
    </nav>
  );
};

export default withRouter(MobileMenu);
