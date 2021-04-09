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
import { Menu, Popover, Drawer } from 'antd';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { SpriteIcons } from 'common';
import { config } from '~/config';
import { getParentContainer } from 'common/utils';
import PageContent from '~/layout/common/page-content';
import './menu.scss';

const { Item: MenuItem } = Menu;

interface IPropsMenuDrawer {
  name: string;
  subList: any[];

  handlevisibleChange: (data: boolean) => void;

  page: string;
}

const MenuDrawer = ({ name, subList, handlevisibleChange, page }: IPropsMenuDrawer) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    close();
  }, [page]);
  const handleClick = () => {
    setVisible((pre) => {
      handlevisibleChange(!pre);
      return !pre;
    });
  };
  const close = () => {
    setVisible(false);
    handlevisibleChange(false);
  };
  return (
    <>
      <a onClick={handleClick} className="bold-600">{name}</a>
      <Drawer
        getContainer={document.getElementsByClassName('dice-default-layout')[0] as HTMLElement}
        className="menu-drawer"
        placement="top"
        visible={visible}
        closable={false}
        onClose={close}
      >
        <div className="items">
          <div className=" item-wraper">
            <PageContent className="flex-box">
              {
                subList.map((subMenu) => {
                  return (
                    <div key={subMenu.name} className="item">
                      {subMenu.img ? <SpriteIcons path="common" className={`site-sub-menu-img ${subMenu.img}`} /> : null}
                      <div className="name">{subMenu.name}</div>
                      <div className="desc">{subMenu.description}</div>
                    </div>
                  );
                })
              }
            </PageContent>
          </div>
        </div>
      </Drawer>
    </>
  );
};

interface IMenu {
  handlevisibleChange: (v: boolean) => void;
  page: string;
}


const IntroMenu = ({ handlevisibleChange, page }: IMenu) => {
  const menuList = config.headerMenus;

  return (
    <nav className="site-menu">
      <Menu mode="horizontal" selectedKeys={[]}>
        {map(menuList, (menu: any) => {
          const { name, subList, url, jumpOut, props, status } = menu;
          if (status === 'unrealized') {
            return (
              <MenuItem key={name}>
                <Popover placement="bottom" content={<p className="nowrap">敬请期待</p>} getPopupContainer={getParentContainer}>
                  <a className="bold-600">{name}</a>
                </Popover>
              </MenuItem>
            );
          } else if (subList) {
            return (
              <MenuItem key={name}>
                <MenuDrawer page={page} name={name} subList={subList} handlevisibleChange={handlevisibleChange} />
              </MenuItem>
            );
          } else {
            return (
              <MenuItem key={url}>
                {
                    jumpOut
                      ? <a className="bold-600" href={url} {...props} target="_blank" rel="noopener noreferrer">{name}</a>
                      : <Link className="bold-600" aria-label={`open ${name}`} to={url}> {name} </Link>
                  }
              </MenuItem>
            );
          }
        })}
      </Menu>
    </nav>
  );
};

export default IntroMenu;
