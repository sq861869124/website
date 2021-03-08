import * as React from 'react';
import { Spin } from 'antd';
import Markdown from 'common/utils/marked';

import './file-container.scss';

interface IProps{
  content: string;
  name?: string | JSX.Element;
  className?: string;
}

const FileContainer = ({ content= '', name= '简介', className = '', }: IProps) => {
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

export  { FileContainer };
