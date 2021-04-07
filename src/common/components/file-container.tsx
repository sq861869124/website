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
import { Spin } from 'antd';
import Markdown from 'common/utils/marked';

import './file-container.scss';

interface IProps{
  content: string;
  name?: string | JSX.Element;
  className?: string;
}

const FileContainer = ({ content = '', name = '简介', className = '' }: IProps) => {
  const [isSpinning, setSpin] = React.useState(true);
  React.useEffect(() => {
    let unMount = false;

    setTimeout(() => {
      if (!unMount) {
        setSpin(false);
      }
    }, 500);

    return () => {
      unMount = true;
    };
  });

  const clsName = className.replace('undefined', '');

  return (
    <article className={`file-container ${clsName}`}>
      {/* <div className="file-title bold">
        <span> { name }</span>
      </div> */}
      <div className="file-content">
        <Spin spinning={isSpinning} wrapperClassName="flex-1">
          <article
            className="md-content"
            dangerouslySetInnerHTML={{ __html: Markdown(content) }}
          />
        </Spin>
      </div>
    </article>
  );
};

export { FileContainer };
