import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import merge from 'lodash-es/merge';
import Table from './components/Table';
import { contributor } from '../../api';

export default () => {
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
      <Table dataSource={dataSource} loading={loading} onQuery={onQuery} />
    </Container>
  );
};
