import React, { Fragment } from 'react';
import CourseList from '@/components/CourseList';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-40 p-b-60" >
        <div className="container  p-t-60  text-left">
          <div className="media">
            <div className="media-left p-r-40">
              <img className="media-object" width="128" height="128" alt="64x64" src="/static/images/teacher1.png" /> 
            </div>
            <div className="media-body">
              <h3>王小林</h3>
              <p>讲师</p>
              <div className="text-white" >
                <p>王小林，坚持“研、严、妍”，培养高质量人才，中国教育（高校版）,建立专业思想，寻找知识增长点．高教论丛，新生—如何适应新的大学学习生活，7.刘财等．浅谈本科生毕业论文(设计)．高教论丛，1996，No.4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-t-60 p-b-60">
        <div className="container p-b-60 text-center">
          <CourseList />
        </div>
      </div>
    </Fragment>
  );
};
