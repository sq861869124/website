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
import { Row, Col } from 'antd';
import { SpriteIcons } from '~/common';
import './card.scss';


interface ICardProps {
  img: string;
  name: string;
  desc: string;
  imgSize?: number;
  path: string;
}
export const Card = ({ img, name, desc, path }: ICardProps) => {
  return (
    <div className="card-item">
      <div className="img">
        <SpriteIcons path={path} className={img} />
      </div>
      <div>
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

interface IListProps {
  list: ICardProps[];
  gutter?: number;
  colProps?: any;
  path: string;
}

export const CardList = ({ list, gutter = 24, colProps = { span: 8 }, path }: IListProps) => {
  return (
    <Row gutter={gutter}>
      {
        list.map((data) => {
          return (
            <Col {...colProps} key={data.name} style={{ marginBottom: `${gutter}px` }}>
              <Card {...data} path={path} />
            </Col>
          );
        })
      }
    </Row>
  );
};
