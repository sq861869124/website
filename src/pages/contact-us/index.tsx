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
import PageContent from '~/layout/common/page-content';
import { Form, Input, Select, Button } from 'antd';
import { IT_SIZE, COMPANY_SIZE, PURPOSE, NAME_MAP } from 'pages/contact-us/constant';
import { getFormFieldsValue } from 'common/utils';
import { Link } from 'react-router-dom';
import { submitContactInfo } from '~/services/contact';
import { CustomModal } from 'common';
import RegularMap from 'common/utils/reg-rules';
import i18n from '~/i18n';
import './index.scss';

const { Item: FormItem } = Form;

interface IFormData extends CONTACT.contactUs {
  otherPurpose?: string;
}

const modalInfo = `${i18n.t('submitted successfully!')} \n\r${i18n.t('thank you for your attention! We will contact you as soon as possible!')}`;


const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [showOtherPurpose, setShowOtherPurpose] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChangePurpose = (key: string) => {
    setShowOtherPurpose(key === '其他');
    formRef.setFieldsValue({
      otherPurpose: undefined,
    });
  };

  const handleSubmit = async () => {
    const { error, data } = await getFormFieldsValue<IFormData>(formRef);
    if (error) {
      return;
    }
    const { otherPurpose, ...rest } = data;
    if (otherPurpose) {
      rest.purpose = otherPurpose;
    }
    const res = await submitContactInfo(rest).catch((e) => e);
    console.log(res);
    if (res.success) {
      toggleModal();
    }
  };

  return (
    <div className="erda-contact-us">
      <div className="full-width-header">
        <div className="erda-contact-us-header v-flex-box">
          <p className="title">{i18n.t('try the enterprise digital platform (Erda Cloud) now')}</p>
          <p className="title-desc">{i18n.t('please fill in your real information in order to pass the review as soon as possible and start the trial')}</p>
        </div>
      </div>
      <PageContent>
        <Form form={formRef} className="form-wrap" layout="vertical">
          <FormItem
            label={NAME_MAP.realname}
            name="realname"
            rules={[
              { required: true, message: i18n.t('please enter {realname}', { realname: NAME_MAP.realname }) },
            ]}
          >
            <Input autoComplete="off" autoFocus placeholder={i18n.t('please enter {realname}', { realname: NAME_MAP.realname })} />
          </FormItem>
          <FormItem
            label={NAME_MAP.mobile}
            name="mobile"
            rules={[
              { required: true, message: i18n.t('please enter {realname}', { realname: NAME_MAP.mobile }) },
              RegularMap.mobile,
            ]}
          >
            <Input autoComplete="off" placeholder={i18n.t('please enter {realname}', { realname: NAME_MAP.mobile })} />
          </FormItem>
          <FormItem
            label={NAME_MAP.email}
            name="email"
            rules={[
              { required: true, message: i18n.t('please enter {realname}', { realname: NAME_MAP.email }) },
              RegularMap.email,
            ]}
          >
            <Input autoComplete="off" placeholder={i18n.t('please enter {realname}', { realname: NAME_MAP.email })} />
          </FormItem>
          <FormItem
            label={NAME_MAP.position}
            name="position"
            rules={[
              { required: true, message: i18n.t('please enter {realname}', { realname: NAME_MAP.position }) },
            ]}
          >
            <Input autoComplete="off" placeholder={i18n.t('please enter {realname}', { realname: NAME_MAP.position })} />
          </FormItem>
          <FormItem
            label={NAME_MAP.company}
            name="company"
            rules={[
              { required: true, message: i18n.t('please enter {realname}', { realname: NAME_MAP.company }) },
            ]}
          >
            <Input autoComplete="off" placeholder={i18n.t('please enter {realname}', { realname: NAME_MAP.company })} />
          </FormItem>
          <FormItem
            label={NAME_MAP.company_size}
            name="company_size"
            rules={[
              { required: true, message: i18n.t('please choose {size}', { size: NAME_MAP.company_size }) },
            ]}
          >
            <Select placeholder={i18n.t('please choose {size}', { size: NAME_MAP.company_size })}>
              {
                COMPANY_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.it_size}
            name="it_size"
            rules={[
              { required: true, message: i18n.t('please choose {size}', { size: NAME_MAP.it_size }) },
            ]}
          >
            <Select placeholder={i18n.t('please choose {size}', { size: NAME_MAP.it_size })}>
              {
                IT_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.purpose}
            name="purpose"
            rules={[
              { required: true, message: i18n.t('please choose {size}', { size: NAME_MAP.purpose }) },
            ]}
          >
            <Select placeholder={i18n.t('please choose {size}', { size: NAME_MAP.purpose })} onChange={handleChangePurpose}>
              {
                PURPOSE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>;
                })
              }
            </Select>
          </FormItem>
          {
            showOtherPurpose ? (
              <FormItem
                label={NAME_MAP.otherPurpose}
                name="otherPurpose"
                rules={[
                  { required: true, message: i18n.t('please choose {size}', { size: NAME_MAP.otherPurpose }) },
                ]}
              >
                <Input.TextArea autoComplete="off" placeholder={i18n.t('please choose {size}', { size: NAME_MAP.otherPurpose })} autoSize={{ minRows: 3, maxRows: 10 }} />
              </FormItem>
            ) : null
          }
          <div>
            <Button type="primary" onClick={handleSubmit}>{i18n.t('submit')}</Button>
            <Link className="ant-btn ml12" to="/">{i18n.t('cancel')}</Link>
          </div>
        </Form>
        <CustomModal title={i18n.t('Apply for trial')} visible={modalVisible} toggleModal={toggleModal}>{modalInfo}</CustomModal>
      </PageContent>
    </div>
  );
};

export default ContactUs;
