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
import { Modal, Form, Input } from 'antd';
import axios, { AxiosResponse } from 'axios';
import i18n from '~/i18n';
import { getFormFieldsValue, handleError, regRules } from 'common/utils';

const FormItem = Form.Item;

interface IProps {
  visible: boolean;
  apiPublishId: string;
  onCancel: () => void;
}

const ApplyModal = ({ visible, onCancel, apiPublishId }: IProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const handleCancel = () => {
    onCancel();
  };

  const handleRegister = async () => {
    const { error, data } = await getFormFieldsValue(form);
    if (error) {
      return;
    }
    axios.post(`/api/gateway/publications/${apiPublishId}/subscribe`, data).then((res: AxiosResponse<IResponse<boolean>>) => {
      const { success, err, data: resData } = res.data;
      if (success && resData) {
        handleCancel();
      } else {
        handleError(err);
        return;
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };
  return (
    <Modal
      visible={visible}
      title={i18n.t('apply to use')}
      width={440}
      destroyOnClose
      confirmLoading={loading}
      onCancel={handleCancel}
      onOk={handleRegister}

    >
      <FormItem
        label={i18n.t('mailbox')}
        name="subscriberEmail"
        rules={[
          { required: true, message: i18n.t('please input your email') },
          regRules.email,
        ]}
      >
        <Input autoComplete="off" />,
      </FormItem>
      <FormItem
        label={i18n.t('application instructions')}
        name="description"
      >
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} maxLength={1024} autoComplete="off" />
      </FormItem>
    </Modal>
  );
};
export default ApplyModal;
