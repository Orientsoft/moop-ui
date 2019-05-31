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

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.field = new Field(this, {
      values: {
        remark: get(props.value, 'remark') || '',
        description: get(props.value, 'description') || '',
      },
    });
  }

  onSubmit = (values, error) => {
    const { setStep, setTenant } = this.props;
    const { remark, description } = values;

    if (!error) {
      setTenant({ remark, description });
      setStep(3);
    }
  };

  onUploadSuccess = (image) => {
    this.props.setTenant({ background: image.id });
  };

  render() {
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="学校广告语：" required requiredMessage="广告语不能为空">
          <Input name="remark" placeholder="一句话概括，少于120字" />
        </FormItem>
        <FormItem label="学校介绍：" required requiredMessage="介绍不能为空">
          <Input.TextArea name="description" />
        </FormItem>
        <FormItem label="学校首页头图：">
          <ImageUploader onSuccess={this.onUploadSuccess} value={get(this.props.value, 'background')} />
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
