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
        <Form.Item wrapperCol={{ span: 2, offset: 8 }} {...restProps}>
          <Form.Submit type="primary" className="serverbtn" onClick={values => onClick(values, this)}>{label}</Form.Submit>
        </Form.Item>
      );
    }

    return (
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} field={this.field} {...formProps}>
        {items.map(({ render, ...props }, i) => <Form.Item key={i} requiredMessage="必填项不能为空" patternMessage="格式不正确" {...props}>{render(itemProps)}</Form.Item>)}
        {submitItem}
      </Form>
    );
  }
}
