import React from 'react';
import { Upload, Button } from '@alifd/next';

export default () => [{
  label: '上传数据',
  required: true,
  render: () => <Upload><Button>上传文件</Button></Upload>,
}];
