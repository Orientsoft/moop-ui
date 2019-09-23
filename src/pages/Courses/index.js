import React, { useEffect, useState } from 'react';
import { Radio } from '@alifd/next';
import get from 'lodash-es/get';
import CourseList from '@/components/CourseList';
import Tab from '@/components/Tab';
import { tag as tagAPI } from '@/utils/api';

const sorts = [{
  label: '更新时间',
  value: 'createdAt',
}, {
  label: '创建时间',
  value: 'updatedAt',
}, {
  label: '课程名称',
  value: 'title',
}];

export default () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);
  const [sort, setSort] = useState('');

  useEffect(() => {
    tagAPI.selectAll().then(({ data }) => setTags(data.data));
  }, []);

  return (
    <div className="bg-white p-t-40 p-b-60">
      <Tab onChange={key => setTag(get(tags[key - 1], 'id'))}>
        <Tab.Item title="全部" />
        {tags.map(({ id, name }) => <Tab.Item key={id} title={name} />)}
      </Tab>
      <div className="container m-t-20 m-b-20">
        <span>排序方式：</span>
        <Radio.Group dataSource={sorts} shape="button" value={sort} onChange={v => setSort(v)} />
      </div>
      <div className="container p-b-60 text-center">
        {/* <h2 className="large m-t-60">内容由世界领先的机构开发。</h2>
        <h4 className="m-t-20"> Please select your intresting course , and start !</h4> */}
        <CourseList tag={tag} sort={sort} />
      </div>
    </div>
  );
};
