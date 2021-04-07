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

import React from 'react';
import classNames from 'classnames';
import { Collapse } from 'antd';
import { Icon as CustomIcon } from 'common';
import './accordion.scss';

const { Panel } = Collapse;

export interface IListItem {
  icon: string;
  activeIcon?: string;
  key: string;
  title: string;
  description: string;
}

interface IProps {
  defaultActiveKey?: string;
  list: IListItem[];
  className?: string;
}

const Accordion = (porps: IProps) => {
  const { className, list, defaultActiveKey } = porps;
  const [active, setActive] = React.useState<string | string[]>(defaultActiveKey as string);
  const handleChange = React.useCallback((key: string | string[]) => {
    if (key && key !== active) {
      setActive(key);
    }
  }, [active]);
  const cls = classNames('erda-accordion', {
    [`${className}`]: !!className,
  });
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={handleChange} ghost activeKey={active} accordion className={cls}>
      {
        list.map(({ key, title, description, icon: normalIcon, activeIcon }) => {
          const color = active === key;
          const icon = active === key ? activeIcon || normalIcon : normalIcon;
          const header = (
            <div className="flex-box erda-accordion-header flex-start v-align-start pl8">
              {icon && <div className="erda-accordion-header-icon mr8 flex-box"><CustomIcon color={color} className="icon" type={icon} /></div>}
              <p className="erda-accordion-header-text flex-1">{title}</p>
            </div>
          );
          return (
            <Panel showArrow={false} key={key} header={header}>
              <div className="ml16 pl28 erda-accordion-body">
                {description}
              </div>
            </Panel>
          );
        })
      }

    </Collapse>
  );
};

export default Accordion;
