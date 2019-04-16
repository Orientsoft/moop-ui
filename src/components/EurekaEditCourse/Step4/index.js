import React, { useState, useEffect } from 'react';
import { Checkbox, DatePicker } from '@alifd/next';
import { tag } from '@/utils/api';

const TagList = ({ save, selected = [] }) => {
  const [tags, setTags] = useState([]);
  const [current, setSelected] = useState(selected);
  const onChange = (items) => {
    setSelected(items);
    save(items);
  };

  useEffect(() => {
    tag.selectAll().then(({ data }) => setTags(data.map(item => ({
      label: item.name,
      value: item.id,
    }))));
  }, []);

  return <Checkbox.Group value={current} dataSource={tags} onChange={onChange} />;
};

export default (current, formValues) => [{
  label: '设置时间',
  required: true,
  render: () => <DatePicker.RangePicker name="times" />,
}, {
  label: '添加标签',
  required: true,
  render: () => {
    formValues[current] = formValues[current] || {};
    return <TagList selected={formValues[current].tags} save={data => formValues[current].tags = data} />;
  },
}];
