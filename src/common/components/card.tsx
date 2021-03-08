import * as React from 'react';
import { Row, Col } from 'antd';
import {  SpriteIcons } from '~/common';
import './card.scss';


interface ICardProps {
  img: string;
  name: string;
  desc: string;
  imgSize?: number;
  path: string;
}
export const Card = ({ img, name, desc, path}: ICardProps) => {
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

export const CardList = ({ list, gutter = 24, colProps = { span: 8 }, path}: IListProps) => {
  return (
    <Row type="flex" gutter={gutter}>
      {
        list.map((data) => {
          return (
            <Col {...colProps} key={data.name} style={{ marginBottom: `${gutter}px` }}>
              <Card {...data} path={path}></Card>
            </Col>
          );
        })
      }
    </Row>
  );
};
