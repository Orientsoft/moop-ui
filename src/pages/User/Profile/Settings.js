import React, { Fragment, useState } from 'react';
import { Input, Button, Radio, Upload, Select, Message, Dialog } from '@alifd/next';
import get from 'lodash-es/get';
import EurekaForm from '@/components/EurekaForm';
import { user, IMAGE_UPLOAD_URL } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';
import { isTeacher } from '@/utils';
import consts from '@/utils/consts';

export default (props) => {
  const [thumb, setThumb] = useState(null);
  const [realname, setRealname] = useState(props.user.realname || '');
  const [certification, setCertification] = useState(props.user.certification || '');
  const onClick = (values, form) => {
    form.field.validate(() => {
      let postData = {};
      delete values.thumb;
      // Thumb must is a uuid, not a url
      if (thumb && thumb.indexOf('.') === -1) {
        postData = { ...values, thumb, realname, certification };
      } else {
        postData = { ...values, realname, certification };
      }
      user.update({ data: postData }, { userId: props.user.id }).then(({ data }) => {
        setCurrentUser(data);
        Dialog.alert({
          content: '更新成功',
          onOk: () => location.reload(),
        });
      }).catch(err => Message.error(get(err, 'response.data.msg', err.message)));
    });
  };
  const certificationField = {
    label: <span className="col-sm-2 col-form-label">身份认证信息</span>,
    required: true,
    render: () => (
      <div className="form-check col-sm-8 ">
        <Fragment>
          <Input trim value={certification} onChange={e => setCertification(e)} style={{ width: '100%' }} />
          <div className="text-muted fontsw m-t-10">请填写你的真实学号</div>
        </Fragment>
      </div>
    ),
  };
  const itemBefore = [{
    label: <span className="col-sm-2 col-form-label">用户名：</span>,
    required: true,
    render: () => <div className="form-check col-sm-8 "><Input disabled name="name" style={{ width: '100%' }} /></div>,
  }, {
    label: <span className="col-sm-2 col-form-label">头像：</span>,
    render: () => (
      <div className="form-check col-sm-8 ">
        <Upload
          action={IMAGE_UPLOAD_URL}
          accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
          limit={1}
          listType="card"
          onSuccess={data => setThumb(data.response.id)}
        >
          <img src={props.user.thumb} alt="" width={100} height={100} className="float-left m-r-10" />
          <Button className="m-t-10">上传图片</Button>
          <div className="text-muted fontsw m-t-10">请上传大小不超过1M的图片</div>
        </Upload>
      </div >
    ),
  }, {
    label: <span className="col-sm-2 col-form-label">性别：</span>,
    required: true,
    render: () => <div className="form-check col-sm-8 "><Radio.Group name="gender" defaultValue={consts.sex.MALE} dataSource={[{ label: '男', value: consts.sex.MALE }, { label: '女', value: consts.sex.FEMALE }]} /></div>,
  }, {
    label: <span className="col-sm-2 col-form-label">手机号：</span>,
    required: true,
    render: () => <div className="form-check col-sm-8 "><Input name="mobile" style={{ width: '100%' }} /></div>,
  }, {
    label: <span className="col-sm-2 col-form-label">真实姓名：</span>,
    required: true,
    render: () => (
      <div className="form-check col-sm-8 ">
        <Fragment>
          <Input trim value={realname} onChange={e => setRealname(e)} style={{ width: '100%' }} />
          <div className="text-muted fontsw m-t-10">请填写真实姓名</div>
        </Fragment>
      </div>
    ),
  }];
  const itemAfter = [{
    label: <span className="col-sm-2 col-form-label">常用邮箱：</span>,
    render: () => <div className="form-check col-sm-8 "> <Input name="email" style={{ width: '100%' }} /></div>,
  }];
  const items = isTeacher(props.user) ? itemBefore.concat({
    label: <span className="col-sm-2 col-form-label">职称：</span>,
    required: true,
    render: () => <div className="form-check col-sm-8 "> <Select defaultValue={consts.titles[0]} dataSource={consts.titles} name="profession" style={{ width: '100%' }}  /></div>,
  }, {
      label: <span className="col-sm-2 col-form-label">个人简介：</span>,
    required: true,
    render: () => <div className="form-check col-sm-8 ">  <Input.TextArea name="remark" style={{ width: '100%', height: '200px' }} /></div>,
  }, {
      label: <span className="col-sm-2 col-form-label">链接：</span>,
    render: () => <div className="form-check col-sm-8 "> <Input name="site" style={{ width: '100%' }} /></div>,
  }, itemAfter) : itemBefore.concat(certificationField, ...itemAfter);

  return <EurekaForm items={items} values={props.user} submitProps={{ onClick }} />;
};
