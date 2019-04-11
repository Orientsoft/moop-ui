import React from 'react';
import { Button, Input, Radio, Upload } from '@alifd/next';

const RadioGroup = Radio.Group;

export default (current, step) => [{
  label: '专题名称',
  required: true,
  render: () => <Input name="title" />,
}, {
  label: '专题封面',
  render: () => <Upload><Button>上传图片</Button></Upload>,
}, {
  label: '专题描述',
  required: true,
  render: () => <Input.TextArea name="description" />,
}, {
  label: '预备知识',
  required: true,
  render: () => <Input.TextArea name="requirement" />,
}, {
  label: '考核内容',
  required: true,
  render: () => <Input.TextArea name="testPoint" />,
}, {
  label: '参考资料',
  render: () => <Input />,
}, {
  label: '专题特点',
  render: () => <Input />,
}, {
  label: '是否公开',
  required: true,
  render: () => <RadioGroup dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本专题的学生开放)', value: 0 }]} />,
}];
