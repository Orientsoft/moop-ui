import React, { useState } from 'react';
import classnames from 'classnames';
import { Button, Input, Radio, Upload } from '@alifd/next';
import { IMAGE_UPLOAD_URL } from '@/utils/api';

const RadioGroup = Radio.Group;

const Materials = ({ data = [{ href: '', name: '' }], save }) => {
  const [materials, setMaterials] = useState(data);
  const setValue = (i, value) => {
    materials[i] = Object.assign(materials[i], value);
    setMaterials([...materials]);
    save([...materials]);
  };
  const addMaterial = () => setMaterials([...materials, { href: '', name: '' }]);

  return (
    <div>
      {materials.map(({ href, name }, i) => {
        if (i === materials.length - 1) {
          return (
            <div key={i} className={classnames({ 'm-t-10': i !== 0 })}>
              <Input value={name} onChange={v => setValue(i, { name: v })} placeholder="资料名称" style={{ width: '30%', marginRight: 10 }} />
              <Input value={href} onChange={v => setValue(i, { href: v })} placeholder="网址" style={{ width: '60%', marginRight: 10 }} />
              <Button onClick={addMaterial}>+</Button>
            </div>
          );
        }
        return (
          <div key={i} className={classnames({ 'm-t-10': i !== 0 })}>
            <Input value={name} onChange={v => setValue(i, { name: v })} placeholder="资料名称" style={{ width: '30%', marginRight: 10 }} />
            <Input value={href} onChange={v => setValue(i, { href: v })} placeholder="网址" style={{ width: '60%', marginRight: 10 }} />
          </div>
        );
      })}
    </div>
  );
};

export default (current, formValues) => [{
  label: '专题名称',
  required: true,
  render: () => <Input name="title" />,
}, {
  label: '专题封面',
  render: () => {
    formValues[current] = formValues[current] || {};
    return (
      <Upload onSuccess={data => formValues[current].thumb = data.response.id} className="eureka-upload" listType="card" action={IMAGE_UPLOAD_URL} limit={1}>
        <Button>上传图片</Button>
        <img src={formValues[current].thumb} alt="" width={48} height={48} />
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
  render: () => <Materials data={formValues[current].material} save={data => formValues[current].material = data} />,
}, {
  label: '专题特点',
  render: () => {
    const setValue = (i, v) => formValues[current].characteristic[i] = v;
    const getValue = i => formValues[current].characteristic[i];

    formValues[current].characteristic = formValues[current].characteristic || [];

    return (
      <div>
        <div>
          <Input defaultValue={getValue(0)} onChange={v => setValue(0, v)} placeholder="可选，特点一" />
        </div>
        <div className="m-t-10">
          <Input defaultValue={getValue(1)} onChange={v => setValue(1, v)} placeholder="可选，特点二" />
        </div>
        <div className="m-t-10">
          <Input defaultValue={getValue(2)} onChange={v => setValue(2, v)} placeholder="可选，特点三" />
        </div>
        <div className="m-t-10">
          <Input defaultValue={getValue(3)} onChange={v => setValue(3, v)} placeholder="可选，特点四" />
        </div>
      </div>
    );
  },
}, {
  label: '是否公开',
  required: true,
  render: () => <RadioGroup name="public" dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本专题的学生开放)', value: 0 }]} />,
}];
