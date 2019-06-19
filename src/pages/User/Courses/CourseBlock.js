import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import moment from 'moment';

export default ({ data }) => {
  const onDelete = () => {

  };
  const onRestart = () => {

  };

  return (
    <Fragment>
      <div className="card p-b-10">
        <div className="post"> <Link to={`/classroom?id=${data.id}`} ><img className="card-img-top" height="200" src={get(data, 'thumb.thumbnail') ? data.thumb.thumbnail : '/static/images/index1.jpg'} alt={data.title} /></Link></div>
        <div className="card-body text-left">
          <h5 className="card-title">  <Link to={`/classroom?id=${data.id}`} >{data.title}</Link></h5>
          <p className="card-text">已加入：<span className="text-danger font-weight-bold">{get(data, 'confirm.confirmed', 0)}</span> 人 / 总共 {get(data, 'confirm.total', 0)} 人<br />
            开课时间：<span className="font-italic text-secondary"> {moment(data.startTime).format('YYYY年MM月DD日')} ~ {moment(data.endTime).format('YYYY年MM月DD日')}</span>
          </p>
          {data.status !== 3 && <Link to={{ pathname: '/editclassroom', state: data }} className="btn btn-outline-secondary btn-sm">✎ 编辑课题</Link>}
          {data.stutus === 0 && <a style={{ marginLeft: 10 }} href="javascript:;" onClick={onDelete} className="btn btn-outline-secondary btn-sm">删除课题</a>}
          {data.stutus === 3 && <a style={{ marginLeft: 10 }} href="javascript:;" onClick={onRestart} className="btn btn-outline-secondary btn-sm">重新开始</a>}
        </div>
      </div>
    </Fragment>
  );
};
