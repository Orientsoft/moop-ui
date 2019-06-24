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

    const introduction = get(props.value, 'introduction', []);

    this.field = new Field(this, {
      values: {
        profession1: get(introduction[0], 'profession') || '',
        remark1: get(introduction[0], 'remark') || '',
        profession2: get(introduction[1], 'profession') || '',
        remark2: get(introduction[1], 'remark') || '',
        profession3: get(introduction[2], 'profession') || '',
        remark3: get(introduction[2], 'remark') || '',
      },
    });
  }

  state = { thumbs: Array.from({ length: 3 }) };

  onSubmit = (values, error) => {
    const { setStep, setTenant } = this.props;
    const { profession1, remark1, profession2, remark2, profession3, remark3 } = values;
    const { thumbs } = this.state;

    if (!error) {
      setTenant({
        introduction: [{
          profession: profession1,
          remark: remark1,
          thumb: get(thumbs[0], 'id'),
        }, {
          profession: profession2,
          remark: remark2,
          thumb: get(thumbs[1], 'id'),
        }, {
          profession: profession3,
          remark: remark3,
          thumb: get(thumbs[2], 'id'),
        }],
      });
      setStep(3);
    }
  };

  onUploadSuccess = (image, index) => {
    this.state.thumbs[index] = image;
  };

  render() {
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="角色：">
          <Input name="profession1" readOnly value="老师" style={{ width: '100%', borderColor: 'transparent' }} />
        </FormItem>
        <FormItem label="角色照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 0)} value={get(this.props.value, 'introduction.0.thumb')} />
        </FormItem>
        <FormItem label="角色介绍：" required requiredMessage="角色介绍不能为空">
          <Input.TextArea name="remark1" />
        </FormItem>
        <FormItem label="角色：">
          <Input name="profession2" readOnly value="学生" style={{ width: '100%', borderColor: 'transparent' }} />
        </FormItem>
        <FormItem label="角色照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 1)} value={get(this.props.value, 'introduction.1.thumb')} />
        </FormItem>
        <FormItem label="角色介绍：" required requiredMessage="角色介绍不能为空">
          <Input.TextArea name="remark2" />
        </FormItem>
        <FormItem label="角色：">
          <Input name="profession3" readOnly value="贡献者" style={{ width: '100%', borderColor: 'transparent' }} />
        </FormItem>
        <FormItem label="角色照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 2)} value={get(this.props.value, 'introduction.2.thumb')} />
        </FormItem>
        <FormItem label="角色介绍：" required requiredMessage="角色介绍不能为空">
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
