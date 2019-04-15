import React from 'react';
import { Upload, Button } from '@alifd/next';
import { FILE_UPLOAD_URL } from '@/utils/api';

export default () => [{
  label: '上传数据',
  required: true,
  render: () => <Upload action={FILE_UPLOAD_URL}><Button>上传文件</Button></Upload>,
}];
