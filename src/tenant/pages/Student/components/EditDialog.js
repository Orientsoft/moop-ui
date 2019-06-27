import React, { Component } from 'react';
import { Input, Radio, Dialog, Button, Form, Field } from '@alifd/next';

const { Item } = Form;
const { Group: RadioGroup } = Radio;

export default class EditDialog extends Component {
  constructor(props) {
    super(props);

    const { realname, gender, remark } = props.data;

    this.field = new Field(this, {
      values: { realname, gender, remark },
    });
  }

  onOk = () => {
    this.field.validate((error) => {
      if (error) return;
      this.props.onOk(this.field.getValues());
    });
  };

  render() {
    const { onResetPassword, ...props } = this.props;

    return (
      <Dialog visible {...props} onOk={this.onOk}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ width: 600 }} field={this.field}>
          <Item label="真实姓名" required requiredMessage="真实姓名不能为空">
            <Input name="realname" />
          </Item>
          <Item label="性别" required requiredMessage="性别不能为空">
            <RadioGroup defaultValue={0} name="gender" style={{ marginTop: 7 }}>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </RadioGroup>
          </Item>
          <Item label="密码">
            <Button onClick={onResetPassword}>重置密码</Button>
          </Item>
          <Item label="备注">
            <Input.TextArea name="remark" />
          </Item>
        </Form>
      </Dialog>
    );
  }
}
