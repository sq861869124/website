import * as React from 'react';
import Common from './sprites/common';
import About from './sprites/about';
import Home from './sprites/home';

const SpriteMap = {
  about: About,
  common: Common,
  home: Home
};

interface IProps{
  path: string;
  [pro: string]: any;
}
export const SpriteIcons = ({path, ...rest}: IProps) => {
  const Comp = SpriteMap[path];
  return <Comp {...rest} />;
};
