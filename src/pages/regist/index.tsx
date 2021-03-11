import React from 'react';
import { Button, Checkbox, Form } from 'antd';
import InputWithUnderLine from '~/components/common/inpput-with-under-line';
import { getFormFieldsValue } from 'common/utils';
import CountDonw from 'pages/component/count-down';
import {Link} from 'react-router-dom'

import './index.scss'

const FormItem = Form.Item;

const Regsist = () => {
  const [formRef] = Form.useForm();
  const getVerificationCode = async () => {

  }

  const handleRegist = async () => {
    const {data, error} = await getFormFieldsValue<{ userName: string }>(formRef);
    if (error) {
      return;
    }
    console.log(data);
  };
  return (
    <div className="regist-container">
      <div className="form-wrap pt24 px28 pb36">
        <Form
          form={formRef}
          initialValues={{remember: true}}
        >

          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName="手机号"/>
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName="图片验证码"/>
          </FormItem>
          <FormItem
            name="password"
            rules={[{
              required: true, message: '请输入密码'
            }]}
          >
            <InputWithUnderLine type="password" filedName="密码"/>
          </FormItem>
          <FormItem
            name="password"
            rules={[{
              required: true, message: '请输入密码'
            }]}
          >
            <InputWithUnderLine type="password" filedName="确认密码"/>
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName="昵称"/>
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine suffix={<CountDonw triggerStart={getVerificationCode} template={'{countdown}秒后重新获取'} time={60} btnText="获取验证码"/>}/>
          </FormItem>

          <FormItem
            name="remember"
            className="mb0"
            valuePropName="checked"
          >
            <Checkbox><span>我已阅读并同意<a href="">用户协议</a></span></Checkbox>
          </FormItem>
          <Button className="login-button" onClick={handleRegist} type="primary">注册</Button>
          <div className="flex-box sign-in-column mt8">
            <Link to="/login">返回登录</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Regsist;
