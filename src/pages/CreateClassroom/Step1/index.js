import React from 'react';
import { Button, Form, Input, Radio, Field, Upload } from '@alifd/next';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

export default class Step1 extends React.Component {
  field = new Field(this);

  componentDidMount() {
    const values = sessionStorage.getItem('step1');

    if (values) {
      try {
        this.field.setValues(JSON.parse(values));
      } catch (error) { /* Nothing */ }
    }
  }

  onNext = () => {
    this.field.validate((error) => {
      if (!error && this.props.next) {
        sessionStorage.setItem('step1', JSON.stringify(this.field.getValues()));
        this.props.next();
      }
    });
  }

  render() {
    return (
      <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <Form {...formItemLayout} field={this.field} className="needs-validation">
          <FormItem label="专题名称" required>
            <Input name="title" />
          </FormItem>
          <FormItem label="专题封面">
            <Upload>
              <Button>上传图片</Button>
            </Upload>
          </FormItem>
          <FormItem label="专题描述">
            <Input name="description" />
          </FormItem>
          <FormItem label="预备知识">
            <Input name="requirement" />
          </FormItem>
          <FormItem label="考核内容">
            <Input name="testPoint" />
          </FormItem>
          <FormItem label="参考资料">
            <Input name="materials" />
          </FormItem>
          <FormItem label="专题特点">
            <Input name="thumb" />
          </FormItem>
          <FormItem label="是否公开">
            <RadioGroup name="public">
              <Radio value="1">公开(对所有学生开放)</Radio>
              <Radio value="0">私有(只对本专题学生开放)</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem wrapperCol={{ span: 4, offset: 10 }}>
            <Form.Submit validate type="primary" style={{ width: '100%' }} onClick={this.onNext}>下一步</Form.Submit>
          </FormItem>
        </Form>
      </div>
    );
  }
}
