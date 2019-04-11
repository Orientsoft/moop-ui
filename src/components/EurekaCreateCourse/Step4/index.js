import React, { useState, useEffect } from 'react';
import { Checkbox, DatePicker } from '@alifd/next';
import { tag } from '@/utils/api';

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    tag.selectAll().then(({ data }) => setTags(data.map(item => ({
      label: item.name,
      value: item.id,
    }))));
  }, []);

  return <Checkbox.Group dataSource={tags} onChange={items => setSelected(items)} />;
};

export default () => [{
  label: '设置时间',
  required: true,
  render: () => <DatePicker.RangePicker />,
}, {
  label: '添加标签',
  required: true,
  render: () => <TagList />,
}];
