import React, { Component } from 'react';
import { Input, Dialog, Form, Field } from '@alifd/next';

const { Item } = Form;

export default class AddDialog extends Component {
  field = new Field(this)

  onOk = () => {
    this.field.validate((error) => {
      if (error) return;
      this.props.onOk(this.field.getValues());
    });
  };

  render() {
    return (
      <Dialog visible {...this.props} onOk={this.onOk}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} style={{ width: 400 }} field={this.field}>
          <Item label="用户名" required requiredMessage="用户名不能为空">
            <Input name="name" />
          </Item>
          <Item label="真实姓名" required requiredMessage="真实姓名不能为空">
            <Input name="realname" />
          </Item>
          <Item label="备注">
            <Input.TextArea name="remark" />
          </Item>
        </Form>
      </Dialog>
    );
  }
}
