import React, { useRef } from 'react';
import { Input, Button, Radio, Upload, Message } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user, IMAGE_UPLOAD_URL } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';

export default (props) => {
  const uploader = useRef(null);
  const items = [{
    label: '用户名',
    required: true,
    render: () => <Input disabled name="name" />,
  }, {
    label: '头像',
    render: () => (
      <Upload
        action={IMAGE_UPLOAD_URL}
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        ref={uploader}
        autoUpload={false}
        limit={1}
        listType="image"
      >
        <Button>上传图片</Button>
      </Upload>
    ),
  }, {
    label: '真实姓名',
    required: true,
    render: () => <Input name="realname" />,
  }, {
    label: '身份认证信息',
    required: true,
    render: () => <Input name="certification" />,
  }, {
    label: '常用邮箱',
    render: () => <Input name="email" />,
  }, {
    label: '手机号',
    required: true,
    render: () => <Input name="mobile" />,
  }, {
    label: '性别',
    required: true,
    render: () => <Radio.Group name="gender" defaultValue={1} dataSource={[{ label: '女', value: 0 }, { label: '男', value: 1 }]} />,
  }];
  const onClick = (values, form) => {
    form.field.validate(() => {
      if (uploader) {
        uploader.current.getInstance().startUpload();
      }
      user.update({ data: values }, { userId: props.user.id }).then(({ data }) => {
        setCurrentUser(data);
        Message.success('更新成功');
      });
    });
  };

  return <EurekaForm items={items} values={props.user} submitProps={{ onClick }} />;
};
