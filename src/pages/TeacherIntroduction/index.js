import React, { Fragment } from 'react';
import CourseList from '@/components/CourseList';

export default (props) => {
  const teacher = props.location.state || {};

  return (
    <Fragment>
      <div className="bg-conttop p-t-40 p-b-60" >
        <div className="container  p-t-60  text-left">
          <div className="media">
            <div className="media-left p-r-40">
              <img className="media-object" width="128" height="128" alt="64x64" src={teacher.thumb} />
            </div>
            <div className="media-body">
              <h3>{teacher.realname}</h3>
              <p>{teacher.profession}</p>
              <div className="text-white" >
                <p>{teacher.remark}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-t-60 p-b-60">
        <div className="container p-b-60 text-center">
          <CourseList owner={teacher.id} />
        </div>
      </div>
    </Fragment>
  );
};
