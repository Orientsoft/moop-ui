import React from 'react';
import { Form, Field } from '@alifd/next';

export default class extends React.Component {
  field = new Field(this);

  componentDidMount() {
    if (this.props.values) {
      this.field.setValues(this.props.values);
    }
  }

  render() {
    const { children, submitProps, items, itemProps, ...formProps } = this.props;
    let submitItem = null;

    if (submitProps) {
      const { label = '提交', onClick, ...restProps } = submitProps;

      submitItem = (
        <Form.Item wrapperCol={{ span: 4, offset: 10 }} {...restProps}>
          <Form.Submit type="primary" style={{ width: '100%' }} onClick={values => onClick(values, this)}>{label}</Form.Submit>
        </Form.Item>
      );
    }

    return (
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} field={this.field} {...formProps}>
        {items.map(({ render, ...props }, i) => <Form.Item key={i} requiredMessage={`${props.label}不能为空`} {...props}>{render(itemProps)}</Form.Item>)}
        {submitItem}
      </Form>
    );
  }
}
