import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import merge from 'lodash-es/merge';
import Table from './components/Table';
import Edit from '../Edit';
import { contributor } from '../../api';

export default () => {
  const [editing, setEditing] = useState(null);
  const [payload, setPayload] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(null);
  const onQuery = (_payload) => {
    const lastPayload = merge(payload, _payload);

    setLoading(true);
    setPayload(lastPayload);

    return contributor.select(lastPayload).then(({ data }) => {
      setDataSource(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Table style={{ display: editing ? 'none' : '' }} dataSource={dataSource} loading={loading} onQuery={onQuery} setEditing={setEditing} />
      {editing && <Edit dataSource={editing} onBack={() => { setEditing(null); onQuery(); }} />}
    </Container>
  );
};
