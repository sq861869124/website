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
import { Button, Checkbox, Form } from 'antd';
import InputWithUnderLine from '~/layout/common/inpput-with-under-line';
import { getFormFieldsValue } from 'common/utils';

const FormItem = Form.Item;

const AccountLogin = () => {
  const [formRef] = Form.useForm();
  const handleLogin = async () => {
    const { data, error } = await getFormFieldsValue<{ userName: string }>(formRef);
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
        <InputWithUnderLine filedName="用户名/手机号/邮箱" />
      </FormItem>
      <FormItem
        name="password"
        className="mb0"
        rules={[{
          required: true, message: '请输入密码',
        }]}
      >
        <InputWithUnderLine type="password" filedName="密码" />
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

export default AccountLogin;
