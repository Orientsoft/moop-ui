import React, { Component } from 'react';
import { Input, Dialog, Form, Field } from '@alifd/next';

const { Item } = Form;

export default class AddDialog extends Component {
  field = new Field(this);

  onOk = () => {
    this.field.validate((error) => {
      const tags = Object.values(this.field.getValues()).filter(tag => tag && tag.trim());
      if (!error && tags.length) {
        this.props.onOk(tags);
      } else {
        this.props.onCancel();
      }
    });
  };

  render() {
    return (
      <Dialog visible {...this.props} onOk={this.onOk}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ width: 400 }} field={this.field}>
          <Item label="分类一：">
            <Input name="name1" placeholder="可选" />
          </Item>
          <Item label="分类二：">
            <Input name="name2" placeholder="可选" />
          </Item>
          <Item label="分类三：">
            <Input name="name3" placeholder="可选" />
          </Item>
        </Form>
      </Dialog>
    );
  }
}
