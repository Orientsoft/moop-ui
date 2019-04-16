import React from 'react';
import { Checkbox } from '@alifd/next';

export default () => [{
  label: '立即发布',
  required: true,
  render: () => <Checkbox name="status">发布专题</Checkbox>,
}];
