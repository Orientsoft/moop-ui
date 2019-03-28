import React from 'react';

export default ({ data }) => (
  <div className="row m-t-40 ">
    {data.map(({ id, thumb, name, remark }) => (
      <div key={id} className="media col">
        <div className="media-left p-r-40">
          <a href="teacher.html"><img className="media-object" alt={name} src={thumb} style={{ width: 128, height: 128 }} /></a>
        </div>
        <div className="media-body ">
          <h3><a href="teacher.html">{name}</a></h3>
          <p>讲师</p>
          <div className="text-secondary">
            <p>{remark}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
