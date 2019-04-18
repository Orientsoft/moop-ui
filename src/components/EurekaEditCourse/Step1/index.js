import React from 'react';
import { Button, Input, Radio, Upload } from '@alifd/next';
import { IMAGE_UPLOAD_URL } from '@/utils/api';
import get from 'lodash-es/get';
import set from 'lodash-es/set';

const RadioGroup = Radio.Group;

export default (current, formValues) => [{
  label: '专题名称',
  required: true,
  render: () => <Input name="title" />,
}, {
  label: '专题封面',
  render: () => {
    formValues[current] = get(formValues, current, {});
    return (
      <Upload onSuccess={data => set(formValues[current], 'thumb', data.id)} className="eureka-upload" listType="card" action={IMAGE_UPLOAD_URL} limit={1}>
        <Button>上传图片</Button>
        <img src={formValues.thumb} alt="" width={32} height={32} />
      </Upload>
    );
  },
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
  render: () => <Input.TextArea name="material" placeholder="每一行代表一份参考资料" />,
}, {
  label: '专题特点',
  render: () => <Input name="characteristic" placeholder="多个特点用逗号分隔" />,
}, {
  label: '是否公开',
  required: true,
  render: () => <RadioGroup name="public" dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本专题的学生开放)', value: 0 }]} />,
}];
