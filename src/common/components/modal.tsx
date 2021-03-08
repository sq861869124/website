import * as React from 'react';
import { Modal, Button } from 'antd';
import { CustomImg } from 'common';

import './modal.scss';
import { useMobile } from '../utils';
import { goTo } from 'common/utils';

interface IProps {
  [pro: string]: any;
  title: string;
  visible: boolean;
  children: any;
  width?: number;
  toggleModal(): void;
  handleOk?(): void;
}
export const CustomModal = (props: IProps) => {
  const isMobile = useMobile();
  const { title, visible, toggleModal, handleOk, children, width = 588, ...rest } = props;
  const onOk = () => {
    handleOk && handleOk();
    toggleModal();
  };
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      width={width}
      footer={<Button type="primary" onClick={() => { toggleModal(); goTo('/'); }} block={isMobile}>确定</Button>}
      onCancel={toggleModal}
      {...rest}
    >
      <div className="modal-container">
        <CustomImg path="common" name="sycg" className="modal-img" />
        <div className="modal-content">
          {children}
        </div>
      </div>
    </Modal>
  );

};

