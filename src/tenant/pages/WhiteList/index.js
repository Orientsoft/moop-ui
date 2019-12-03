import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import { Button, Dialog, Message } from '@alifd/next';
import merge from 'lodash-es/merge';
import Table from './components/Table';
import AddDialog from './components/AddDialog';
import { whitelist } from '../../api';

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

    return whitelist.list(lastPayload).then(({ data }) => {
      setTeachers(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };
  const onAddOk = (data) => {
    return whitelist.create({ data }).then(() => {
      setVisible(false);
      Message.success('添加用户成功');
      onQuery();
    });
  };
  const onDelete = (record) => {
    Dialog.alert({
      title: '删除',
      content: <span>确定删除用户 {record.realname}?</span>,
      onOk: () => whitelist.delete({ params: { id: record.id } }).then(onQuery),
    });
  };
  const onDeleteBatches = () => {
    if (selected.length) {
      Dialog.confirm({
        title: '删除',
        content: '确认删除?',
        onOk: () => Promise.all(selected.map(t => whitelist.delete({ params: { id: t.id } }))).then(() => {
          setSelected([]);
          onQuery();
        }),
      });
    } else {
      Dialog.alert({
        title: '删除',
        content: '请选择用户',
      });
    }
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Button type="primary" onClick={() => setVisible(true)}>添加</Button>
      <Button style={{ marginLeft: 15 }} type="normal" warning onClick={onDeleteBatches}>删除</Button>
      <Table dataSource={teachers} loading={loading} onQuery={onQuery} onDelete={onDelete} onSelect={records => setSelected(records)} />
      {visible && <AddDialog title="添加" onOk={onAddOk} onCancel={() => setVisible(false)} onClose={() => setVisible(false)} />}
    </Container>
  );
};
