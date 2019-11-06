import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@alifd/next';
import get from 'lodash-es/get';
import moment from 'moment';
import { classroom } from '@/utils/api';

export default ({ data }) => {
  const onDelete = () => {
    Dialog.confirm({
      title: '删除课程',
      content: '确认删除？',
      onOk: () => classroom.delete({}, { classroomId: data.id }).then(() => location.reload()),
    });
  };
  const onRestart = () => {
    Dialog.confirm({
      title: '重新开始',
      content: '确认重新开启课程？',
      onOk: () => classroom.restart({ data: { id: data.id } }).then(() => location.reload()),
    });
  };

  return (
    <Fragment>
      <div className="card p-b-10">
        <div className="post">
          <Link to={`/classroom?id=${data.id}`}>
            <img className="card-img-top" height="200" src={get(data, 'thumb.thumbnail') ? data.thumb.thumbnail : '/images/index1.jpg'} alt={data.title} />
            {data.status !== 0 && <div style={data.status !== 3 ? publishedCourse : endedCourse}>{data.status !== 3 ? '已发布' : '已结束'}</div>}
          </Link>
        </div>
        <div className="card-body text-left">
          <h5 className="card-title">  <Link to={`/classroom?id=${data.id}`} >{data.title}</Link></h5>
          <p className="card-text">已加入 <span className="text-danger font-weight-bold">{get(data, 'confirm.confirmed', 0)}</span> 人 / 共邀请 {get(data, 'confirm.total', 0)} 人 / 人数上限 {get(data, 'limit') || 0} 人<br />
            开课时间：<span className="font-italic text-secondary"> {moment(data.startTime).format('YYYY年MM月DD日')} ~ {moment(data.endTime).format('YYYY年MM月DD日')}</span>
          </p>
          {data.status !== 3 && <Link to={{ pathname: '/editclassroom', state: data }} className="btn btn-outline-secondary btn-sm">✎ 编辑课题</Link>}
          {data.status === 0 && <a style={{ marginLeft: 10 }} href="javascript:;" onClick={onDelete} className="btn btn-outline-secondary btn-sm">删除课题</a>}
          {data.status === 3 && <a style={{ marginLeft: 10 }} href="javascript:;" onClick={onRestart} className="btn btn-outline-secondary btn-sm">重新开始</a>}
        </div>
      </div>
    </Fragment>
  );
};

const publishedCourse = {
  position: 'absolute',
  right: '-50%',
  top: 0,
  lineHeight: '40px',
  width: '100%',
  height: '40px',
  textIndent: '-1.5em',
  textAlign: 'center',
  color: 'white',
  background: 'salmon',
  boxShadow: '0px 0px 4px salmon',
  transform: 'rotate(45deg) translateY(40px)',
};

const endedCourse = {
  position: 'absolute',
  right: '-50%',
  top: 0,
  lineHeight: '40px',
  width: '100%',
  height: '40px',
  textIndent: '-1.5em',
  textAlign: 'center',
  color: 'white',
  background: 'lightgrey',
  boxShadow: '0px 0px 4px lightgrey',
  transform: 'rotate(45deg) translateY(40px)',
};
