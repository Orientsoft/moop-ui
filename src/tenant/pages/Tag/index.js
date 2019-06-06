import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import { Button, Message } from '@alifd/next';
import merge from 'lodash-es/merge';
import { tag } from '@/utils/api';
import Table from './components/Table';
import AddDialog from './components/AddDialog';

export default () => {
  const [payload, setPayload] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const onQuery = (_payload) => {
    const lastPayload = merge(payload, _payload);

    setLoading(true);
    setPayload(lastPayload);

    return tag.selectAll(lastPayload).then(({ data }) => {
      setTags(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };
  const onAddOk = (values) => {
    tag.create({ data: { tags: values } }).then(() => {
      setVisible(false);
      Message.success('添加成功');
      onQuery();
    });
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Button type="primary" onClick={() => setVisible(true)}>新增</Button>
      {visible && <AddDialog title="新增分类" onOk={onAddOk} onClose={() => setVisible(false)} onCancel={() => setVisible(false)} />}
      <Table dataSource={tags} loading={loading} onQuery={onQuery} />
    </Container>
  );
};
