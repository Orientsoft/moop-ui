import React, { Fragment, useState } from 'react';
import { Input, Button, Radio, Upload, Select } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user, IMAGE_UPLOAD_URL } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';
import { isTeacher } from '@/utils';
import consts from '@/utils/consts';

export default (props) => {
  const [thumb, setThumb] = useState(null);
  const [realname, setRealname] = useState('');
  const onClick = (values, form) => {
    form.field.validate(() => {
      const postData = thumb ? { ...values, thumb, realname } : { ...values, realname };
      user.update({ data: postData }, { userId: props.user.id }).then(({ data }) => {
        setCurrentUser(data);
        location.reload();
      });
    });
  };
  const certification = {
    label: '身份认证信息',
    required: true,
    render: () => <Input name="certification" />,
  };
  const itemBefore = [{
    label: '用户名',
    required: true,
    render: () => <Input disabled name="name" />,
  }, {
    label: '头像',
    render: () => (
      <Upload
        action={IMAGE_UPLOAD_URL}
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        limit={1}
        listType="card"
        onSuccess={data => setThumb(data.response.id)}
      >
        <Button>上传图片</Button>
        <div className="text-muted fontsw m-t-10">请上传大小不超过1M的图片</div>
      </Upload>
    ),
  }, {
    label: '真实姓名',
    required: true,
    render: () => (
      <Fragment>
        <Input trim onChange={e => setRealname(e)} style={{ width: '100%' }} />
        <div className="text-muted fontsw m-t-10">请填写真实姓名</div>
      </Fragment>
    ),
  }];
  const itemAfter = [{
    label: '常用邮箱',
    render: () => <Input name="email" />,
  }, {
    label: '手机号',
    required: true,
    render: () => <Input name="mobile" />,
  }, {
    label: '性别',
    required: true,
    render: () => <Radio.Group name="gender" defaultValue={consts.sex.MALE} dataSource={[{ label: '男', value: consts.sex.MALE }, { label: '女', value: consts.sex.FEMALE }]} />,
  }];
  const items = isTeacher(props.user) ? itemBefore.concat({
    label: '职称',
    required: true,
    render: () => <Select defaultValue={consts.titles[0]} dataSource={consts.titles} name="profession" />,
  }, {
    label: '个人简介',
    required: true,
    render: () => <Input.TextArea name="remark" />,
  }, {
    label: '链接',
    render: () => <Input name="site" />,
  }, itemAfter) : itemBefore.concat(certification, ...itemAfter);

  return <EurekaForm items={items} values={props.user} submitProps={{ onClick }} />;
};
