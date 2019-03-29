import React, { useEffect, useState } from 'react';
import get from 'lodash-es/get';
import CourseList from '@/components/CourseList';
import Tab from '@/components/Tab';
import { tag as tagAPI } from '@/utils/api';

export default () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);

  useEffect(() => {
    tagAPI.selectAll().then(({ data }) => setTags(data));
  }, []);

  return (
    <div className="bg-white p-t-40 p-b-60">
      <Tab onChange={key => setTag(get(tags[key - 1], 'id'))}>
        <Tab.Item title="全部" />
        {tags.map(({ id, name }) => <Tab.Item key={id} title={name} />)}
      </Tab>
      <div className="container p-b-60 text-center">
        <h2 className="large m-t-60">内容由世界领先的机构开发。</h2>
        <h4 className="m-t-20"> Please select your intresting course , and start !</h4>
        <CourseList tag={tag} />
      </div>
    </div>
  );
};
