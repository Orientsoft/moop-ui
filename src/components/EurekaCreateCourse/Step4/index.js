import React, { Fragment, useState } from 'react';
import { Dialog, Button, Input, Upload, Table } from '@alifd/next';
import { STUDENT_UPLOAD_URL, invitation } from '@/utils/api';

export default (current, formValues, form) => [{
  render: () => {
    const [visible, setVisible] = useState(false);
    const [students, setStudents] = useState(null);
    const onSuccess = (data) => {
      setStudents(data.response);
      formValues[current] = data.response;
    };
    const onOk = () => {
      invitation.createBatch({
        data: {
          classroom: form.state.classroomData.id,
          certifications: students.success.map(s => s['学生身份信息']),
        },
      });
      setVisible(false);
    };
    const onDelete = (student) => {
      invitation.delete({});
    };

    return (
      <Fragment>
        <Button type="primary" style={{ marginBottom: 20 }} onClick={() => setVisible(true)}>导入学生列表</Button>
        {students ? null : <p>你还没有添加学生，请添加学生</p>}
        <Table dataSource={students ? students.success : []}>
          <Table.Column dataIndex="学生身份信息" title="学生身份信息" />
          <Table.Column dataIndex="姓名" title="姓名" />
          <Table.Column width={120} cell={v => <Button type="normal" warning onClick={() => onDelete(v)}>删除</Button>} title="操作" />
        </Table>
        {students ? <p>已导入{students.success.length}个学生，有{students.fail.length}个导入失败。</p> : null}
        <Dialog title="添加学生" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} style={{ width: 680 }}>
          <p>选择上传文件</p>
          <Upload action={STUDENT_UPLOAD_URL} limit={1} listType="text" onSuccess={onSuccess}>
            <Button type="primary">上传文件</Button>
          </Upload>
          <p>或粘贴学生信息</p>
          <Input.TextArea style={{ width: '100%' }} rows={16} />
        </Dialog>
      </Fragment>
    );
  },
}];
