import React from 'react';
import { Upload, Button } from '@alifd/next';
import get from 'lodash-es/get';
import { DATA_UPLOAD_URL } from '@/utils/api';

export default (current, formValue, form) => [{
  label: '上传数据',
  required: true,
  render: () => <Upload listType="text" action={`${DATA_UPLOAD_URL}?classroomId=${get(form, 'state.classroomData.id')}`}><Button>上传文件</Button></Upload>,
}];
