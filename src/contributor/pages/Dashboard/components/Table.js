import React, { useState } from 'react';
import { Table, Grid, Button, Pagination, Dialog } from '@alifd/next';
import Ellipsis from '@icedesign/ellipsis';
import get from 'lodash-es/get';
import { contributor } from '../../../api';

const { Row } = Grid;
const { Column } = Table;

export default ({ dataSource, onQuery, setEditing, style, ...tableProps }) => {
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
  const onDelete = (record) => {
    Dialog.confirm({
      title: '删除',
      content: <span>确认删除实验 <strong>{record.title}</strong></span>,
      onOk: () => contributor.delete({}, { projectId: record.id }).then(onQuery),
    });
  };
  const onEdit = (record) => {
    setEditing(record);
  };
  const renderAction = (value, i, record) => (
    <Row justify="space-between" align="center">
      <Button disabled={record.disabled} type={record.running ? 'primary' : 'secondary'} onClick={() => onTest(record)}>{record.running ? '停止实验' : '启动实验'}</Button>
      <Button onClick={() => onEdit(record)} type="normal">编辑</Button>
      <Button onClick={() => onDelete(record)} warning>删除</Button>
    </Row>
  );

  return (
    <div style={style}>
      <Table
        primaryKey="id"
        dataSource={get(dataSource, 'projects', [])}
        hasBorder={false}
        openRowKeys={openRowKeys}
        expandedRowIndent={[1, 1]}
        onRowOpen={keys => setOpenRowKeys(keys)}
        expandedRowRender={record => record.labs.map((lab, i) => {
          const name = lab.name;
          const styles = { display: 'block' };

          if (record.running) {
            return <a key={i} style={styles} href={`/${record.labURL[lab.id]}`} target="_blank" rel="noopener noreferrer">{name}</a>;
          }
          return <div key={i} style={styles}>{name}</div>;
        })}
        {...tableProps}
      >
        <Column title="实验标题" dataIndex="title" width={200} />
        <Column title="实验描述" width={400} cell={(value, i, record) => <Ellipsis style={{ width: 400 }} showTooltip lineLimit={1} text={record.description} />} />
        <Column title="预计学时" dataIndex="timeConsume" width={120} />
        <Column title="Github地址" dataIndex="spec" width={300} cell={value => <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>} />
        <Column title="镜像" dataIndex="image" width={300} />
        <Column title="操作" lock="right" width={240} cell={renderAction} />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
