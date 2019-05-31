import React, { Component } from 'react';
import { Input, Radio, Select, Dialog, Form, Field } from '@alifd/next';

const { Item } = Form;
const { Option } = Select;
const { Group: RadioGroup } = Radio;

export default class EditDialog extends Component {
  constructor(props) {
    super(props);

    const { name, mobile, realname, gender, profession } = props.data;

    this.field = new Field(this, {
      values: { name, mobile, realname, gender, profession },
    });
  }

  onOk = () => {
    this.field.validate((error) => {
      if (error) return;
      this.props.onOk(this.field.getValues());
    });
  };

  render() {
    return (
      <Dialog visible {...this.props} onOk={this.onOk}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ width: 600 }} field={this.field}>
          <Item label="用户名" required requiredMessage="用户名不能为空">
            <Input name="name" />
          </Item>
          <Item label="手机号" required requiredMessage="手机号不能为空">
            <Input name="mobile" />
          </Item>
          <Item label="真实姓名" required requiredMessage="真实姓名不能为空">
            <Input name="realname" />
          </Item>
          <Item label="性别" required requiredMessage="性别不能为空">
            <RadioGroup name="gender" style={{ marginTop: 7 }}>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </RadioGroup>
          </Item>
          <Item label="职称" required requiredMessage="职称不能为空">
            <Select name="profession" style={{ width: '100%' }}>
              <Option value="助教">助教</Option>
              <Option value="讲师">讲师</Option>
              <Option value="教授">教授</Option>
            </Select>
          </Item>
        </Form>
      </Dialog>
    );
  }
}
