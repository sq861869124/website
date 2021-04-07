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

import classnames from 'classnames';
import * as React from 'react';
import { Icon as CustomIcon } from 'common';
import './empty-holder.scss';

export const EmptyHolder = ({
  icon = 'not-found',
  tip = '暂无内容',
  relative = false,
  style = {},
  action = null,
}) => {
  const cls = classnames({
    'empty-holder': true,
    'multi-line': true,
    relative,
  });
  return (
    <div className={cls} style={style}>
      <CustomIcon type={icon} />
      <span>{tip} <span className="action">{action}</span></span>
    </div>
  );
};
