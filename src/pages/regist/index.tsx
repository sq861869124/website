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
import CountDonw from 'pages/component/count-down';
import { Link } from 'react-router-dom';

import './index.scss';

const FormItem = Form.Item;

const Regsist = () => {
  const [formRef] = Form.useForm();
  const getVerificationCode = async () => {

  };

  const handleRegist = async () => {
    const { data, error } = await getFormFieldsValue<{ userName: string }>(formRef);
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
          initialValues={{ remember: true }}
        >

          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName={i18n.t('phone number')} />
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName={i18n.t('image verification code')} />
          </FormItem>
          <FormItem
            name="password"
            rules={[{
              required: true, message: i18n.t('please enter the password'),
            }]}
          >
            <InputWithUnderLine type="password" filedName={i18n.t('password')} />
          </FormItem>
          <FormItem
            name="password"
            rules={[{
              required: true, message: i18n.t('please enter the password'),
            }]}
          >
            <InputWithUnderLine type="password" filedName={i18n.t('confirm password')} />
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine filedName={i18n.t('nickname')} />
          </FormItem>
          <FormItem
            name="userNme"
          >
            <InputWithUnderLine suffix={<CountDonw triggerStart={getVerificationCode} template={'{countdown}秒后重新获取'} time={60} btnText={i18n.t('get verification code')} />} />
          </FormItem>

          <FormItem
            name="remember"
            className="mb0"
            valuePropName="checked"
          >
            <Checkbox><span>{i18n.t('I have read and agree')}<a href="">{i18n.t('user Agreement')}</a></span></Checkbox>
          </FormItem>
          <Button className="login-button" onClick={handleRegist} type="primary">{i18n.t('registered')}</Button>
          <div className="flex-box sign-in-column mt8">
            <Link to="/login">{i18n.t('back to login')}</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Regsist;
