import React, { Component } from 'react';
import { Input, Dialog, Form, Select, Field } from '@alifd/next';

const { Item } = Form;
const { Option } = Select;

const roles = [{
  name: '学生',
  role: 4,
}, {
  name: '老师',
  role: 3,
}, {
  name: '贡献者',
  role: 1,
}, {
  name: '管理员',
  role: 2,
}];

export default class AddDialog extends Component {
  field = new Field(this)

  onOk = () => {
    this.field.validate((error) => {
      if (error) return;
      const values = this.field.getValues();

      values.roles = values.roles.map(role => roles.find(item => item.role === role));
      this.props.onOk(values);
    });
  };

  render() {
    return (
      <Dialog visible {...this.props} onOk={this.onOk}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} style={{ width: 400 }} field={this.field}>
          <Item label="真实姓名" required requiredMessage="真实姓名不能为空">
            <Input name="realname" />
          </Item>
          <Item label="手机号码" required requiredMessage="手机号码不能为空">
            <Input name="mobile" />
          </Item>
          <Item label="角色">
            <Select mode="multiple" name="roles" style={{ width: '100%' }}>
              {roles.map(role => <Option key={role.role} value={role.role}>{role.name}</Option>)}
            </Select>
          </Item>
        </Form>
      </Dialog>
    );
  }
}
