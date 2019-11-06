import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import { Button, Input, Upload, Dialog, Message } from '@alifd/next';
import merge from 'lodash-es/merge';
import debounce from 'lodash-es/debounce';
import Table from './components/Table';
import { student } from '../../api';

export default () => {
  const [payload, setPayload] = useState({});
  const [isImporting, setIsImporting] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState(null);
  const onQuery = (_payload) => {
    const lastPayload = merge(payload, _payload);

    setLoading(true);
    setPayload(lastPayload);

    return student.select(lastPayload).then(({ data }) => {
      setStudents(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };
  const onDelete = (record) => {
    Dialog.alert({
      title: '删除',
      content: <span>确定删除学生  {record.realname}?</span>,
      onOk: () => student.delete({ params: { id: record.id } }).then(onQuery),
    });
  };
  const onDeleteBatches = () => {
    if (selected.length) {
      Dialog.confirm({
        title: '删除',
        content: '确认删除?',
        onOk: () => Promise.all(selected.map(s => student.delete({ params: { id: s.id } }))).then(() => {
          setSelected([]);
          onQuery();
        }),
      });
    } else {
      Dialog.alert({
        title: '删除',
        content: '请选择学生',
      });
    }
  };
  const onImportOk = ({ response }) => {
    setIsImporting(false);
    Message.success(`成功导入 ${response.create.length} 条，重复 ${response.repeat.length} 条`);
    onQuery();
  };
  const onImportError = (res) => {
    setIsImporting(false);
    Message.error(res.response);
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Input placeholder="按真实姓名查询" onChange={debounce(search => onQuery({ params: { page: 1, search } }), 600)} />
      <Upload action={student.UPLOAD_URL} beforeUpload={() => setIsImporting(true)} onSuccess={onImportOk} onError={onImportError} accept=".csv" style={{ display: 'inline-block' }}>
        <Button loading={isImporting} style={{ marginLeft: 15 }} type="primary">导入</Button>
      </Upload>
      <Button style={{ marginLeft: 15 }} type="normal" warning onClick={onDeleteBatches}>删除</Button>
      <a style={{ fontSize: 14, textDecoration: 'underline', marginLeft: 15 }} target="_blank" rel="noopenner noreferer" href="/import_students.csv">下载导入模版</a>
      <Table dataSource={students} loading={loading} onQuery={onQuery} onDelete={onDelete} onSelect={records => setSelected(records)} />
    </Container>
  );
};
