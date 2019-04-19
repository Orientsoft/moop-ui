import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data }) => (
  <div className="row m-t-40 ">
    {(data || []).map(teacher => (
      <div key={teacher.id} className="media col">
        <div className="media-left p-r-40">
          <Link to={{ pathname: '/teacherintroduction', state: teacher }}><img className="media-object" alt={teacher.realname} src={teacher.thumb} style={{ width: 128, height: 128 }} /></Link>
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
