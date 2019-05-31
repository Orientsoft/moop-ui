import React, { Component } from 'react';
import { Form, Input, Field, Select, Grid } from '@alifd/next';
import get from 'lodash-es/get';
import ImageUploader from '../../../components/ImageUploader';

const { Item: FormItem } = Form;
const { Col } = Grid;
const { Option } = Select;

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
        name1: get(introduction[0], 'realname') || '',
        profession1: get(introduction[0], 'profession') || '',
        remark1: get(introduction[0], 'remark') || '',
        name2: get(introduction[1], 'realname') || '',
        profession2: get(introduction[1], 'profession') || '',
        remark2: get(introduction[1], 'remark') || '',
        name3: get(introduction[2], 'realname') || '',
        profession3: get(introduction[2], 'profession') || '',
        remark3: get(introduction[2], 'remark') || '',
      },
    });
  }

  state = { thumbs: Array.from({ length: 3 }) };

  onSubmit = (values, error) => {
    const { setStep, setTenant } = this.props;
    const { name1, profession1, remark1, name2, profession2, remark2, name3, profession3, remark3 } = values;
    const { thumbs } = this.state;

    if (!error) {
      setTenant({
        introduction: [{
          realname: name1,
          profession: profession1,
          remark: remark1,
          thumb: get(thumbs[0], 'id'),
        }, {
          realname: name2,
          profession: profession2,
          remark: remark2,
          thumb: get(thumbs[1], 'id'),
        }, {
          realname: name3,
          profession: profession3,
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
        <FormItem label="老师名字：" required requiredMessage="名字不能为空">
          <Input name="name1" placeholder="名称不多于20个文字" />
        </FormItem>
        <FormItem label="老师照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 0)} value={get(this.props.value, 'introduction.0.thumb')} />
        </FormItem>
        <FormItem label="职称：" required requiredMessage="联系老师不能为空">
          <Select name="profession1" defaultValue="讲师" style={{ width: '100%' }}>
            <Option value="助教">助教</Option>
            <Option value="讲师">讲师</Option>
            <Option value="教授">教授</Option>
          </Select>
        </FormItem>
        <FormItem label="老师介绍：" required requiredMessage="联系电话不能为空">
          <Input.TextArea name="remark1" />
        </FormItem>
        <FormItem label="老师名字：" required requiredMessage="名字不能为空">
          <Input name="name2" placeholder="名称不多于20个文字" />
        </FormItem>
        <FormItem label="老师照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 1)} value={get(this.props.value, 'introduction.1.thumb')} />
        </FormItem>
        <FormItem label="职称：" required requiredMessage="联系老师不能为空">
          <Select name="profession2" defaultValue="讲师" style={{ width: '100%' }}>
            <Option value="助教">助教</Option>
            <Option value="讲师">讲师</Option>
            <Option value="教授">教授</Option>
          </Select>
        </FormItem>
        <FormItem label="老师介绍：" required requiredMessage="联系电话不能为空">
          <Input.TextArea name="remark2" />
        </FormItem>
        <FormItem label="老师名字：" required requiredMessage="名字不能为空">
          <Input name="name3" placeholder="名称不多于20个文字" />
        </FormItem>
        <FormItem label="老师照片：">
          <ImageUploader onSuccess={image => this.onUploadSuccess(image, 2)} value={get(this.props.value, 'introduction.2.thumb')} />
        </FormItem>
        <FormItem label="职称：" required requiredMessage="联系老师不能为空">
          <Select name="profession3" defaultValue="讲师" style={{ width: '100%' }}>
            <Option value="助教">助教</Option>
            <Option value="讲师">讲师</Option>
            <Option value="教授">教授</Option>
          </Select>
        </FormItem>
        <FormItem label="老师介绍：" required requiredMessage="联系电话不能为空">
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
