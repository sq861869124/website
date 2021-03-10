import React from 'react';
import { Modal, Form, Input, message, Spin } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { getFormFieldsValue } from 'common/utils';

const FormItem = Form.Item;

interface IProps {
  visible: boolean;
  apiPublishId: string;
  onCancel(): void;
  afterSummit(): void;
}

interface IAuthInfo {
  type: string;
  config: {
    header: string
  }
}

const AuthModal = ({ visible, onCancel, apiPublishId, afterSummit }: IProps) => {
  const [form] = Form.useForm();
  const [ loading, setLoading ] = React.useState(false);
  const [ authType, setAuthType ] = React.useState('');
  const [ authKey, setAuthkey ] = React.useState('');
  const key = `api-market-${apiPublishId}`;
  const handleCancel = () => {
    onCancel();
  };

  React.useEffect(() => {
    if (visible) {
      const IAuthInfoStr = sessionStorage.getItem(key);
      if (IAuthInfoStr) {
        const auth = JSON.parse(IAuthInfoStr || '{}');
        setAuthkey(auth.authKey);
        setAuthType(auth.authType);
        form.setFieldsValue({value: auth.value});
      }else {
        getIAuthInfo();
      }
    }
  }, [visible]);

  const getIAuthInfo = () => {
    setLoading(true);
    axios.get(`/api/gateway/publications/${apiPublishId}/authn`).then((res: AxiosResponse<IResponse<IAuthInfo>>) => {
      const {success, data, err} = res.data;
      if (success) {
        const {header= 'X-API-Key'} = data.config || {};
        setAuthkey(header);
        setAuthType(data.type || 'KeyAuth');
      }else {
        message.error(err.msg);
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  const handleAuth = async () => {
    const {error, data}  = await getFormFieldsValue<{value: string}>(form)
    if(error){
      return;
    }
    sessionStorage.setItem(key, JSON.stringify({...data, authKey, authType}));
    afterSummit && afterSummit();
    handleCancel();
  };
  return (
    <Modal
      visible={visible}
      title="调用认证"
      width={440}
      destroyOnClose
      onCancel={handleCancel}
      onOk={handleAuth}

    >
        <Spin spinning={loading}>
          <FormItem
            label="认证说明"
          >
            <p>API requires authorization. Enter your credentials to make calls to this API.</p>
          </FormItem>
          <FormItem
            label="认证类型"
          >
            <p>{authType}</p>
          </FormItem>
          <FormItem
            label="Key"
          >
            <p>{authKey}</p>
          </FormItem>
          <FormItem
            label="Value"
            name="value"
            rules={[{
              required: true, message: '请输入'
            }]}
          >
            <Input placeholder="请输入"/>,
          </FormItem>
        </Spin>
    </Modal>
  );
};
export default AuthModal;
