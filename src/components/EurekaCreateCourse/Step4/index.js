import React, { useState, useEffect } from 'react';
import { Checkbox, DatePicker } from '@alifd/next';
import get from 'lodash/get';
import { tag } from '@/utils/api';

const TagList = ({ save }) => {
  const [tags, setTags] = useState([]);
  const [_, setSelected] = useState([]);
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

  return <Checkbox.Group dataSource={tags} onChange={onChange} />;
};

export default (current, formValues) => [{
  label: '设置时间',
  required: true,
  render: () => <DatePicker.RangePicker name="times" />,
}, {
  label: '添加标签',
  required: true,
  render: () => {
    formValues[current] = get(formValues[current], 'tags', {});
    return <TagList save={data => formValues[current].tags = data} />;
  },
}];
