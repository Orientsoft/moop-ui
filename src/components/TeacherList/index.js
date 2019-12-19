import React from 'react';
import { Link } from 'react-router-dom';
import consts from '@/utils/consts';

export default ({ data = [] }) => {
  data.forEach((teacher) => {
    if (!teacher.gender) {
      teacher.gender = consts.sex.MALE;
    }
    if (!teacher.thumb) {
      if (teacher.gender === consts.sex.MALE) {
        teacher.thumb = '/static/images/headerboy.png';
      } else {
        teacher.thumb = '/static/images/headgirl.png';
      }
    }
  });

  return (
    <div className="row m-t-40 ">
      {(data || []).map(teacher => (
        <div key={teacher.id} className="media col">
          <div className="media-left p-r-40">
            <Link to={{ pathname: '/teacherintroduction', state: teacher }}><img className="media-object" alt={teacher.realname} src={teacher.thumb} style={{ width: 256, height: 256 }} /></Link>
          </div>
          <div className="media-body ">
            <h3><Link to={{ pathname: '/teacherintroduction', state: teacher }}>{teacher.realname}</Link></h3>
            <p>{teacher.profession}</p>
            <div className="text-secondary">
              <p>{teacher.remark}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
