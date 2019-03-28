import React from 'react';
import CourseList from '@/components/CourseList';

export default () => {
  return (
    <div className="bg-white p-t-40 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large m-t-60">内容由世界领先的机构开发。</h2>
        <h4 className="m-t-20"> Please select your intresting course , and start !</h4>
        <CourseList />
      </div>
    </div>
  );
};
