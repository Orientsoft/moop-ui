import React, { Fragment, useState } from 'react';
import { Dialog, Button, Input, Upload } from '@alifd/next';
import { STUDENT_UPLOAD_URL } from '@/utils/api';

const AddDialog = () => {
  const [visible, setVisible] = useState(false);
  const onOk = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>导入学生列表</Button>
      <Dialog title="添加学生" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} style={{ width: 680 }}>
        <p>选择上传文件</p>
        <Upload action={STUDENT_UPLOAD_URL} limit={1}><Button>上传文件</Button></Upload>
        <p>或粘贴学生信息</p>
        <Input.TextArea style={{ width: '100%' }} rows={16} />
      </Dialog>
    </Fragment>
  );
};

export default (current, step) => {
  return [{
    label: '添加学生',
    required: true,
    render: () => <AddDialog />,
  }];
};
