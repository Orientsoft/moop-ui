import React, { Component } from 'react';
import { Button, Message } from '@alifd/next';
import get from 'lodash-es/get';
import { tenant } from '../../../api';

export default class Step4 extends Component {
  onSubmit = () => {
    const { value, setStep, getTenant, removeTenant } = this.props;
    const tenantData = getTenant();

    if (tenantData) {
      tenant.update({ data: tenantData }, { tenantId: get(value, 'tenant.id') }).then(() => {
        Message.success('租户创建成功');
        removeTenant();
        setStep(0);
      });
    } else {
      Message.warning('请完善租户信息');
    }
  };

  onBack = () => this.props.setStep(0);

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>确认提交？</h2>
        <p>提交之后修改会立即显示在首页，是否提交？</p>
        <div style={{ margin: '30px 0' }}>
          <Button type="primary" onClick={this.onSubmit}>确认提交</Button>
          <Button style={{ marginLeft: 10 }} onClick={this.onBack}>返回修改</Button>
        </div>
      </div>
    );
  }
}
