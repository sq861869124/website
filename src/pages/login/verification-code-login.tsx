import React from 'react';
import { Button, Checkbox, Form } from 'antd';
import InputWithUnderLine from '~/components/common/inpput-with-under-line';
import { getFormFieldsValue } from 'common/utils';
import CountDonw from 'pages/component/count-down';

const FormItem = Form.Item;

const VerificationCodeLogin = () => {
  const [formRef] = Form.useForm();
  const getVerificationCode = async () => {

  }
  const handleLogin = async () => {
    const {data, error} = await getFormFieldsValue<{ userName: string }>(formRef);
    if (error) {
      return;
    }
    console.log(data);
  };


  return (
    <Form
      form={formRef}
      initialValues={{ remember: true }}
    >

      <FormItem
        name="userNme"
      >
        <InputWithUnderLine filedName="手机号"/>
      </FormItem>
      <FormItem
        name="password"
        rules={[{
          required: true, message: '请输入密码'
        }]}
      >
        <InputWithUnderLine type="password" filedName="图片验证码"/>
      </FormItem>
      <FormItem
        name="verification"
        className="mb0"
        rules={[{
          required: true, message: '请输入密码'
        }]}
      >
        <InputWithUnderLine suffix={<CountDonw triggerStart={getVerificationCode} template={'{countdown}秒后重新获取'} time={60} btnText="获取验证码"/>}/>
      </FormItem>
      <FormItem
        name="remember"
        className="mb0"
        valuePropName="checked"
      >
        <Checkbox>保持登录</Checkbox>
      </FormItem>
      <Button className="login-button" onClick={handleLogin} type="primary">立即登录</Button>
    </Form>
  );
};

export default VerificationCodeLogin;
