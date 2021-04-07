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
import { Modal, Button } from 'antd';
import { CustomImg } from 'common';

import './modal.scss';
import { useMobile, goTo } from '../utils';


interface IProps {
  [pro: string]: any;
  title: string;
  visible: boolean;
  children: any;
  width?: number;
  toggleModal: () => void;
  handleOk?: () => void;
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

