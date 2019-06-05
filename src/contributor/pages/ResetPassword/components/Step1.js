import React, { Component } from 'react';
import { Form, Input, Field, Grid, Message } from '@alifd/next';
import { user } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';

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
    this.field = new Field(this);
  }

  onSubmit = (values, error) => {
    if (!error) {
      const usr = getCurrentUser();
      if (usr) {
        user.update({ data: values }, { userId: usr.id }).then(() => {
          Message.success('修改密码成功');
          this.field.reset();
        });
      } else {
        Message.error('请登录');
      }
    }
  };

  render() {
    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="原密码：" required requiredMessage="原密码不能为空">
          <Input name="key" htmlType="password" />
        </FormItem>
        <FormItem label="新密码：" required requiredMessage="新密码不能为空">
          <Input name="newKey" htmlType="password" />
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Col offset={6}>
            <Form.Submit validate type="primary" onClick={this.onSubmit}>提交</Form.Submit>
          </Col>
        </FormItem>
      </Form>
    );
  }
}
