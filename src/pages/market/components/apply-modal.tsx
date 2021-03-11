import React from 'react';
import { Modal, Form, Input } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { getFormFieldsValue, handleError, regRules } from 'common/utils';

const FormItem = Form.Item;

interface IProps {
  visible: boolean;
  apiPublishId: string;
  onCancel(): void;
}

const ApplyModal = ({ visible, onCancel, apiPublishId }: IProps) => {
  const [form] = Form.useForm();
  const [ loading, setLoading ] = React.useState(false);
  const handleCancel = () => {
    onCancel();
  };

  const handleRegister = async () => {
    const {error, data} = await getFormFieldsValue(form)
    if (error) {
      return ;
    }
    axios.post(`/api/gateway/publications/${apiPublishId}/subscribe`, data).then((res: AxiosResponse<IResponse<boolean>>) => {
      const {success, err, data} = res.data;
      if (success && data) {
        handleCancel();
      }else {
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
      title="申请使用"
      width={440}
      destroyOnClose
      confirmLoading={loading}
      onCancel={handleCancel}
      onOk={handleRegister}

    >
      <FormItem
        label="邮箱"
        name="subscriberEmail"
        rules={[
          { required: true, message: '请输入邮箱' },
          regRules.email
        ]}
      >
        <Input autoComplete="off"/>,
      </FormItem>
      <FormItem
        label="申请说明"
        name="description"
      >
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} maxLength={1024} autoComplete="off"/>
      </FormItem>
    </Modal>
  );
};
export default ApplyModal;
