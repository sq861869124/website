import React from 'react';
import PageContent from '~/components/common/page-content'
import { Form, Input, Select, Button } from 'antd';
import { IT_SIZE, COMPANY_SIZE, PURPOSE, NAME_MAP } from 'pages/contact-us/constant';
import { getFormFieldsValue } from 'common/utils';
import { Link } from 'react-router-dom'
import { submitContactInfo } from '~/services/contact';
import { CustomModal } from 'common';
import RegularMap from 'common/utils/reg-rules';
import './index.scss'

const { Item: FormItem } = Form;

interface IFormData extends CONTACT.contactUs {
  otherPurpose?: string;
}

const modalInfo = '提交成功! \n\r感谢您的关注！我们将尽快联系您！'


const ContactUs = () => {
  const [ formRef ] = Form.useForm();
  const [ showOtherPurpose, setShowOtherPurpose ] = React.useState(false);
  const [ modalVisible, setModalVisible ] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChangePurpose = (key: string) => {
    setShowOtherPurpose(key === '其他')
    formRef.setFieldsValue({
      otherPurpose: undefined
    })
  }

  const handleSubmit = async () => {
    const { error, data } = await getFormFieldsValue<IFormData>(formRef)
    if (error) {
      return
    }
    const { otherPurpose, ...rest } = data;
    if (otherPurpose) {
      rest.purpose = otherPurpose
    }
    const res = await submitContactInfo(rest).catch(e => e)
    console.log(res)
    if (res.success) {
      toggleModal()
    }
  }

  return (
    <div className="erda-contact-us">
      <div className="full-width-header">
        <div className="erda-contact-us-header v-flex-box">
          <p className="title-name fz20">即刻试用企业数字化平台（Dice）</p>
          <p className="title-desc mt12 fz16">请填写您的真实信息，以便尽快通过审核并开启试用</p>
        </div>
      </div>
      <PageContent>
        <Form form={formRef} className="form-wrap" layout="vertical">
          <FormItem
            label={NAME_MAP.realName}
            name='realName'
            rules={[
              { required: true, message: `请输入${NAME_MAP.realName}` }
            ]}
          >
            <Input autoComplete="off" autoFocus placeholder={`请输入${NAME_MAP.realName}`}/>
          </FormItem>
          <FormItem
            label={NAME_MAP.mobile}
            name='mobile'
            rules={[
              { required: true, message: `请输入${NAME_MAP.mobile}` },
              RegularMap.mobile,
            ]}
          >
            <Input autoComplete="off" placeholder={`请输入${NAME_MAP.mobile}`}/>
          </FormItem>
          <FormItem
            label={NAME_MAP.email}
            name='email'
            rules={[
              { required: true, message: `请输入${NAME_MAP.email}` },
              RegularMap.email,
            ]}
          >
            <Input autoComplete="off" placeholder={`请输入${NAME_MAP.email}`}/>
          </FormItem>
          <FormItem
            label={NAME_MAP.position}
            name='position'
            rules={[
              { required: true, message: `请输入${NAME_MAP.position}` }
            ]}
          >
            <Input autoComplete="off" placeholder={`请输入${NAME_MAP.position}`}/>
          </FormItem>
          <FormItem
            label={NAME_MAP.company}
            name='company'
            rules={[
              { required: true, message: `请输入${NAME_MAP.company}` }
            ]}
          >
            <Input autoComplete="off" placeholder={`请输入${NAME_MAP.company}`}/>
          </FormItem>
          <FormItem
            label={NAME_MAP.company_size}
            name='company_size'
            rules={[
              { required: true, message: `请选择${NAME_MAP.company_size}` }
            ]}
          >
            <Select placeholder={`请选择${NAME_MAP.company_size}`}>
              {
                COMPANY_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.it_size}
            name='it_size'
            rules={[
              { required: true, message: `请选择${NAME_MAP.it_size}` }
            ]}
          >
            <Select placeholder={`请选择${NAME_MAP.it_size}`}>
              {
                IT_SIZE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>
                })
              }
            </Select>
          </FormItem>
          <FormItem
            label={NAME_MAP.purpose}
            name='purpose'
            rules={[
              { required: true, message: `请选择${NAME_MAP.purpose}` }
            ]}
          >
            <Select placeholder={`请选择${NAME_MAP.purpose}`} onChange={handleChangePurpose}>
              {
                PURPOSE.map(({ name, value }) => {
                  return <Select.Option value={value} key={value}>{name}</Select.Option>
                })
              }
            </Select>
          </FormItem>
          {
            showOtherPurpose ? (
              <FormItem
                label={NAME_MAP.otherPurpose}
                name='otherPurpose'
                rules={[
                  { required: true, message: `请输入${NAME_MAP.otherPurpose}` }
                ]}
              >
                <Input.TextArea autoComplete="off" placeholder={`请输入${NAME_MAP.otherPurpose}`} autoSize={{ minRows: 3, maxRows: 10 }}/>
              </FormItem>
            ) : null
          }
          <div>
            <Button type="primary" onClick={handleSubmit}>提交</Button>
            <Link className="ant-btn ml12" to="/">取消</Link>
          </div>
        </Form>
        <CustomModal title={'申请试用'} visible={modalVisible} toggleModal={toggleModal}>{modalInfo}</CustomModal>
      </PageContent>
    </div>
  )
}

export default ContactUs;
