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
import i18n from '~/i18n';
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
        <InputWithUnderLine filedName={i18n.t('Username/phone number/email')} />
      </FormItem>
      <FormItem
        name="password"
        className="mb0"
        rules={[{
          required: true, message: i18n.t('please enter the password'),
        }]}
      >
        <InputWithUnderLine type="password" filedName={i18n.t('password')} />
      </FormItem>
      <FormItem
        name="remember"
        className="mb0"
        valuePropName="checked"
      >
        <Checkbox>{i18n.t('keep logged in')}</Checkbox>
      </FormItem>
      <Button className="login-button" onClick={handleLogin} type="primary">{i18n.t('log in immediately')}</Button>
    </Form>
  );
};

export default AccountLogin;
