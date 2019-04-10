import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import moment from 'moment';

export default ({ data }) => {
  return (
    <Fragment>
      <div className="row ">
        <div className="cardinfo col-12 col-md-4 m-t-10">
          <img className="imginfo" src={get(data, 'thumb.thumbnail') ? data.thumb.thumbnail : '/static/images/index1.jpg'} alt={data.title} />
          <h5 className="card-title">{data.title}</h5>
          <p className="fontsw">已加入 <span className="text-danger">{get(data, 'confirm.confirmed', 0)}</span> 人 / 总共 {get(data, 'confirm.total', 0)} 人<br />
            开课时间： {moment(data.startTime).format('YYYY年MM月DD日')} ~ {moment(data.endTime).format('YYYY年MM月DD日')}
          </p>
          <Link to={`/classroom?id=${data.id}`} className="btn btn-primary">查看专题</Link>&nbsp;&nbsp;
          <Link to="#" className="btn btn-primary">编辑专题</Link>
        </div>
        <div className="col-12 col-md-8 m-t-10">
          {get(data, 'projects', []).map(project => (
            <div key={project.id} className="m-t-20">
              <h6 className="card-title">{project.title}</h6>
              {get(project, 'labs', []).map(lab => (
                <div key={lab.id} className="rowline">
                  <div className="float-left">{lab.name}</div>
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                  </div>
                  <div className="float-right">0人已完成</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr />
    </Fragment>
  );
};
