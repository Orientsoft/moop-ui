import React, { useState, useEffect } from 'react';
import { Table, Pagination } from '@alifd/next';
import get from 'lodash-es/get';

const { Column } = Table;

export default ({ dataSource, onDelete, onQuery, onSelect, ...tableProps }) => {
  const [data, setData] = useState([]);
  const onSort = (dataIndex, order) => {
    const a = get(dataSource, 'classroom', []).sort((current, next) => {
      const diff = current[dataIndex] > next[dataIndex] ? 1 : -1;
      return (order === 'asc') ? diff : -diff;
    });
    setData([...a]);
  };

  useEffect(() => {
    setData(get(dataSource, 'classroom', []));
  }, [dataSource]);

  return (
    <div style={{ marginTop: 15 }}>
      <Table onSort={onSort} dataSource={data} hasBorder={false} {...tableProps}>
        <Column title="课程名称" dataIndex="title" width={200} />
        <Column sortable title="课程状态" dataIndex="status" cell={value => get({ 0: '未发布', 1: <span style={{ color: 'green' }}>已发布</span>, 2: <span style={{ color: 'orange' }}>已开始</span>, 3: <span style={{ color: 'red' }}>已结束</span> }, value, '')} />
        <Column title="发布者" dataIndex="owner.realname" />
        <Column sortable title="课程人数上限" dataIndex="limit" />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
