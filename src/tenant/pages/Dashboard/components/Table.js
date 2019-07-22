import React, { useState, useEffect } from 'react';
import { Table, Select, Input, Button, Pagination } from '@alifd/next';
import get from 'lodash-es/get';
import { dashboard } from '../../../api';

const { Column } = Table;
const { Option } = Select;

export default (props) => {
  const [dataSource, setDataSource] = useState({});
  const [condition, setCondition] = useState('owner');
  const onQuery = (payload) => {
    dashboard.projectList(payload).then(setDataSource);
  };

  // useEffect(() => onQuery(), []);

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Select defaultValue={condition} onChange={value => setCondition(value)}>
          <Option value="owner">建立者</Option>
        </Select>
        <Input style={{ margin: '0 15px' }} />
        <Button onClick={onQuery}>查询</Button>
      </div>
      <Table dataSource={get(dataSource, 'data', [])} hasBorder={false} {...props}>
        <Column title="编号" dataIndex="name" />
        <Column title="实验名称" dataIndex="realname" />
        <Column title="建立者" dataIndex="gender" width={100} />
        <Column title="专题数量" dataIndex="remark" />
        <Column title="实验到期时间" dataIndex="remark" />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
