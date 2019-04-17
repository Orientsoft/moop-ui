import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data }) => (
  <div className="row m-t-40 ">
    {(data || []).map(({ id, thumb, realname, remark, profession }) => (
      <div key={id} className="media col">
        <div className="media-left p-r-40">
          <Link to="/teacherintroduction"><img className="media-object" alt={realname} src={thumb} style={{ width: 128, height: 128 }} /></Link>
        </div>
        <div className="media-body ">
          <h3><Link to="/teacherintroduction">{realname}</Link></h3>
          <p>{profession}</p>
          <div className="text-secondary">
            <p>{remark}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
