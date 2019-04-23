import React, { Fragment, useState } from 'react';
import { Step, Input, Upload, Button, Message } from '@alifd/next';
import { IMAGE_UPLOAD_URL, publication } from '@/utils/api';
import EurekaForm from '@/components/EurekaForm';
import MaterialEdit from './MaterialEdit';

export default ({ history }) => {
  const [current, setCurrent] = useState(0);
  const [postData, setPostData] = useState({});
  const { state } = history.location;
  const onSubmit = (values, form) => {
    form.field.validate((error) => {
      if (!error) {
        publication.update({
          data: {
            name: values.name,
            school: values.school,
            institute: values.institute,
            specialty: values.specialty,
            ...postData,
          },
        }, { classroomId: state.classroom }).then(() => {
          Message.success('保存成功');
        });
      }
    });
  };
  const onUpdateImage = ({ response }) => {
    setPostData({ ...postData, image: response.id });
  };
  const onUpdateVideos = ({ response }) => {
    const { videos = [] } = postData;
    if (videos.indexOf(response.url) === -1) {
      videos.push(response.url);
    }
    setPostData({ ...postData, videos });
  };
  const items = [{
    label: '申报名称',
    required: true,
    render: () => <Input name="name" />,
  }, {
    label: '学校',
    required: true,
    render: () => <Input name="school" />,
  }, {
    label: '所属院校',
    required: true,
    render: () => <Input name="institute" />,
  }, {
    label: '对应专业',
    required: true,
    render: () => <Input name="specialty" />,
  }, {
    label: '项目广告',
    render: () => (
      <Upload limit={1} listType="card" action={IMAGE_UPLOAD_URL} onSuccess={onUpdateImage}>
        <Button>上传图片</Button>
      </Upload>
    ),
  }, {
    label: '项目视频',
    render: () => (
      <Upload limit={3} listType="text" action={IMAGE_UPLOAD_URL} onSuccess={onUpdateVideos}>
        <Button>上传视频(最多三个)</Button>
      </Upload>
    ),
  }];

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
        <EurekaForm values={state} style={{ margin: '40px 0', minHeight: 160 }} items={items} submitProps={{ onClick: onSubmit, label: '保存' }} />
      ) : (
        <div className="row">
          <MaterialEdit data={state} />
        </div>
      )}
    </Fragment>
  );
};
