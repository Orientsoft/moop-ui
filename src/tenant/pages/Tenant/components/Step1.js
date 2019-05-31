import React, { Component } from 'react';
import { Form, Input, Field, Grid } from '@alifd/next';
import get from 'lodash-es/get';
import ImageUploader from '../../../components/ImageUploader';

const { Item: FormItem } = Form;
const { Col } = Grid;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.field = new Field(this, {
      values: {
        name: get(props.value, 'name') || '',
        url: get(props.value, 'url') || '',
        teacher: get(props.value, 'teacher') || '',
        mobile: get(props.value, 'mobile') || '',
        email: get(props.value, 'email') || '',
        address: get(props.value, 'address') || '',
      },
    });
  }

  onSubmit = (values, error) => {
    const { setStep, setTenant } = this.props;
    const { name, url, teacher, mobile, email, address } = values;

    if (!error) {
      setTenant({
        name,
        email,
        mobile,
        url,
        address,
        teacher,
      });
      setStep(1);
    }
  };

  onUploadSuccess = (image) => {
    this.props.setTenant({ logo: [image.id] });
  };

  render() {
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="学校中文名称：" required requiredMessage="名称不能为空">
          <Input name="name" placeholder="中文名称不多于20个文字" />
        </FormItem>
        <FormItem label="学校官网：" required requiredMessage="网址不能为空">
          <Input name="url" placeholder="官网网址" />
        </FormItem>
        <FormItem label="学校LOGO：">
          <ImageUploader onSuccess={this.onUploadSuccess} value={get(this.props.value, 'logo.0')} />
        </FormItem>
        <FormItem label="学校联系老师：" required requiredMessage="联系老师不能为空">
          <Input name="teacher" />
        </FormItem>
        <FormItem label="学校联系电话：" required requiredMessage="联系电话不能为空">
          <Input name="mobile" />
        </FormItem>
        <FormItem label="学校邮箱：" required requiredMessage="学校邮箱不能为空">
          <Input name="email" />
        </FormItem>
        <FormItem label="学校联系地址：" required requiredMessage="联系地址不能为空">
          <Input name="address" />
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Col offset={6}>
            <Form.Submit validate type="primary" onClick={this.onSubmit}>下一步</Form.Submit>
          </Col>
        </FormItem>
      </Form>
    );
  }
}
