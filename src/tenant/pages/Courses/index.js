import React, { useState, useEffect } from 'react';
import Container from '@icedesign/container';
import { Input, Dialog, Select } from '@alifd/next';
import merge from 'lodash-es/merge';
import debounce from 'lodash-es/debounce';
import Table from './components/Table';
import { dashboard } from '../../api';

const { Option } = Select;

export default () => {
  const [payload, setPayload] = useState({});
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState({});
  const onQuery = (_payload) => {
    const lastPayload = merge(payload, _payload);

    setLoading(true);
    setPayload(lastPayload);

    return dashboard.classroom(lastPayload).then(({ data }) => {
      setCourses(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };
  const onDelete = (record) => {
    Dialog.alert({
      title: '删除',
      content: <span>确定删除贡献者  {record.realname}?</span>,
      onOk: null,
    });
  };

  useEffect(() => {
    onQuery();
  }, []);

  return (
    <Container>
      <Input placeholder="按课程名称查询" onChange={debounce(search => onQuery({ params: { page: 1, search } }), 600)} />
      <Select placeholder="课程状态" style={{ marginLeft: 15 }} onChange={value => onQuery({ params: { status: value } })}>
        <Option value="0">未发布</Option>
        <Option value="1">已发布</Option>
        <Option value="2">进行中</Option>
        <Option value="3">已结束</Option>
      </Select>
      <div style={{ float: 'right', fontSize: 14, marginTop: 5 }}>
        <span>当前活跃人数: <strong style={{ color: 'green' }}>{courses.active || 0}</strong></span>
        <span style={{ marginLeft: 20 }}>课程总配额: <strong style={{ color: 'green' }}>{courses.tenant_limit || 0}</strong></span>
        <span style={{ marginLeft: 20 }}>已用配额: <strong style={{ color: 'green' }}>{courses.used_limit || 0}</strong></span>
      </div>
      <Table dataSource={courses} loading={loading} onQuery={onQuery} onDelete={onDelete} />
    </Container>
  );
};
