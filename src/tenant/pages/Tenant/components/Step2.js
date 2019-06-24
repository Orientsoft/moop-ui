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

export default class Step2 extends Component {
  constructor(props) {
    super(props);

    const features = get(props.value, 'features', []);

    this.field = new Field(this, {
      values: {
        keyword1: get(features[0], 'keyword') || '',
        remark1: get(features[0], 'remark') || '',
        keyword2: get(features[1], 'keyword') || '',
        remark2: get(features[1], 'remark') || '',
        keyword3: get(features[2], 'keyword') || '',
        remark3: get(features[2], 'remark') || '',
      },
    });
  }

  state = { thumbs: Array.from({ length: 3 }) };

  onSubmit = (values, error) => {
    const { setStep, setTenant } = this.props;
    const { keyword1, remark1, keyword2, remark2, keyword3, remark3 } = values;
    const { thumbs } = this.state;

    if (!error) {
      setTenant({
        features: [{
          keyword: keyword1,
          remark: remark1,
          thumb: get(thumbs[0], 'id'),
        }, {
          keyword: keyword2,
          remark: remark2,
          thumb: get(thumbs[1], 'id'),
        }, {
          keyword: keyword3,
          remark: remark3,
          thumb: get(thumbs[2], 'id'),
        }],
      });
      setStep(2);
    }
  };

  onUploadSuccess = (image, index) => {
    this.state.thumbs[index] = image;
  };

  render() {
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="关键词一：" required requiredMessage="关键词不能为空">
          <Input name="keyword1" style={{ width: '100%' }} />
        </FormItem>
        <FormItem label="展示图片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 0)} value={get(this.props.value, 'features.0.thumb')} />
        </FormItem>
        <FormItem label="详细介绍：" required requiredMessage="详细介绍不能为空">
          <Input.TextArea name="remark1" />
        </FormItem>
        <FormItem label="关键词二：" required requiredMessage="关键词不能为空">
          <Input name="keyword2" style={{ width: '100%' }} />
        </FormItem>
        <FormItem label="展示图片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 1)} value={get(this.props.value, 'features.1.thumb')} />
        </FormItem>
        <FormItem label="详细介绍：" required requiredMessage="详细介绍不能为空">
          <Input.TextArea name="remark2" />
        </FormItem>
        <FormItem label="关键词三：" required requiredMessage="关键词不能为空">
          <Input name="keyword3" style={{ width: '100%' }} />
        </FormItem>
        <FormItem label="展示图片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 2)} value={get(this.props.value, 'features.2.thumb')} />
        </FormItem>
        <FormItem label="详细介绍：" required requiredMessage="详细介绍不能为空">
          <Input.TextArea name="remark3" />
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
