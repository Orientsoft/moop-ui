import React, { useState } from 'react';
import { Table, Grid, Button, Pagination, Dialog } from '@alifd/next';
import get from 'lodash-es/get';
import { contributor } from '../../../api';

const { Row, Col } = Grid;
const { Column } = Table;

export default ({ dataSource, onQuery, ...tableProps }) => {
  const [openRowKeys, setOpenRowKeys] = useState([]);
  const onTest = (record) => {
    if (record.running) {
      Dialog.confirm({
        title: '停止实验',
        content: '确定停止？',
        onOk: () => contributor.close({ data: { project: record.id } })
          .then(onQuery),
      });
    } else {
      Dialog.confirm({
        title: '启动实验',
        content: '确定启动？',
        onOk: () => contributor.test({ data: { project: record.id } })
          .then(() => {
            setOpenRowKeys([...openRowKeys, record.id]);
            onQuery();
          }),
      });
    }
  };
  const renderAction = (value, i, record) => (
    <Row justify="space-around" align="center">
      <Col>
        <Button disabled={record.disabled} type={record.running ? 'primary' : 'secondary'} onClick={() => onTest(record)}>{record.running ? '停止实验' : '启动实验'}</Button>
      </Col>
    </Row>
  );

  return (
    <div>
      <Table
        primaryKey="id"
        dataSource={get(dataSource, 'projects', [])}
        hasBorder={false}
        openRowKeys={openRowKeys}
        onRowOpen={keys => setOpenRowKeys(keys)}
        expandedRowRender={record => record.labs.map((lab, i) => {
          const name = `${i + 1}、${lab.name}`;
          const style = { display: 'block' };

          if (record.running) {
            return <a key={i} style={style} href={`/${record.labURL[lab.id]}`} target="_blank" rel="noopener noreferrer">{name}</a>;
          }
          return <div key={i} style={style}>{name}</div>;
        })}
        {...tableProps}
      >
        <Column title="实验标题" dataIndex="title" />
        <Column title="实验描述" dataIndex="description" />
        <Column title="预计时间" dataIndex="timeConsume" width={100} />
        <Column title="Github地址" dataIndex="spec" cell={value => <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>} />
        <Column title="镜像" dataIndex="image" />
        <Column title="操作" dataIndex="action" width={140} cell={renderAction} />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
