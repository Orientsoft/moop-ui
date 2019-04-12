import React, { Fragment, useState } from 'react';
import { Step, Input, Upload, Button } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import MaterialEdit from './MaterialEdit';

const items = [{
  label: '申报名称',
  required: true,
  render: () => <Input />,
}, {
  label: '学校',
  required: true,
  render: () => <Input />,
}, {
  label: '所属院校',
  required: true,
  render: () => <Input />,
}, {
  label: '对应专业',
  required: true,
  render: () => <Input />,
}, {
  label: '项目广告',
  render: () => <Upload><Button>上传图片</Button></Upload>,
}];

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">创建项目申报实验</h2>
            </div>
          </div>
        </div>
      </div>
      <Step current={current} shape="arrow">
        <Step.Item title="填写基本信息" onClick={() => setCurrent(0)} />
        <Step.Item title="材料编辑" onClick={() => setCurrent(1)} />
      </Step>
      {current === 0 ? (
        <EurekaForm style={{ margin: '40px 0', minHeight: 160 }} items={items} submitProps={{ onClick: () => setCurrent(1), label: '下一步' }} />
      ) : (
        <div className="row">
          <MaterialEdit />
        </div>
      )}
    </Fragment>
  );
};
