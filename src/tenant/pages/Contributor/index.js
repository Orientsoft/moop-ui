import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import { Button, Input, Dialog, Message } from '@alifd/next';
import merge from 'lodash-es/merge';
import debounce from 'lodash-es/debounce';
import Table from './components/Table';
import AddDialog from './components/AddDialog';
import { contributor } from '../../api';

export default () => {
  const [payload, setPayload] = useState({});
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [teachers, setTeachers] = useState(null);
  const onQuery = (_payload) => {
    const lastPayload = merge(payload, _payload);

    setLoading(true);
    setPayload(lastPayload);

    return contributor.select(lastPayload).then(({ data }) => {
      setTeachers(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };
  const onAddOk = (data) => {
    return contributor.create({ data }).then(() => {
      setVisible(false);
      Message.success('添加贡献者成功');
      onQuery();
    });
  };
  const onDelete = (record) => {
    Dialog.alert({
      title: '删除',
      content: <span>确定删除贡献者  {record.realname}?</span>,
      onOk: () => contributor.delete({ params: { id: record.id } }).then(onQuery),
    });
  };
  const onDeleteBatches = () => {
    if (selected.length) {
      Dialog.confirm({
        title: '删除',
        content: '确认删除?',
        onOk: () => Promise.all(selected.map(t => contributor.delete({ params: { id: t.id } }))).then(() => {
          setSelected([]);
          onQuery();
        }),
      });
    } else {
      Dialog.alert({
        title: '删除',
        content: '请选择贡献者',
      });
    }
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Input placeholder="按用户名查询" onChange={debounce(search => onQuery({ params: { page: 1, search } }), 600)} />
      <Button style={{ marginLeft: 15 }} type="primary" onClick={() => setVisible(true)}>添加</Button>
      <Button style={{ marginLeft: 15 }} type="normal" warning onClick={onDeleteBatches}>删除</Button>
      <Table dataSource={teachers} loading={loading} onQuery={onQuery} onDelete={onDelete} onSelect={records => setSelected(records)} />
      {visible && <AddDialog title="添加" onOk={onAddOk} onCancel={() => setVisible(false)} onClose={() => setVisible(false)} />}
    </Container>
  );
};