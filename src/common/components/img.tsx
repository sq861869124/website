import * as React from 'react';
import { getImage } from '~/common/utils';

interface IProps {
  path: string;
  name: string;
  isMobile?: boolean;
  [proName: string]: any;
}
export const CustomImg = (props: IProps) => {
  const { path, name, isMobile = false, ...rest } = props;
  return <img {...rest} {...getImage(path, name, isMobile)} alt={name} />;
};
