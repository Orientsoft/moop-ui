import React, { Fragment, useState, useEffect } from 'react';
import Tab from '@/components/Tab';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import merge from 'lodash-es/merge';
import queryString from 'query-string';
import { publication as publicationAPI } from '@/utils/api';
import ProjectTeam from './ProjectTeam';
import ProjectDescription from './ProjectDescription';
import Network from './Network';
import Technical from './Technical';
import ProjectVideos from './ProjectVideos';
import ItemAdvantage from './ItemAdvantage';
import ServicePlan from './ServicePlan';

export default ({ location }) => {
  const [publication, setPublication] = useState({
    image: '/static/images/slide0.jpg',
  });
  const classId = get(queryString.parse(location.search), 'id');

  useEffect(() => {
    publicationAPI.select({}, { classroomId: classId }).then(({ data }) => {
      setPublication({ ...merge(publication, data) });
    });

    return () => sessionStorage.removeItem('PUBLICATION');
  }, []);

  return (
    <Fragment>
      <div className="bg-conttop bg-detail p-t-60 p-b-60" style={{ backgroundImage: `url(${publication.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{publication.name}</h2>
              <ul className="text-transparent m-t-20">
                <li>所属院校：{publication.institute}</li>
                <li>对应专业：{publication.specialty}</li>
                <li>学校：{publication.school}</li>
              </ul>
              <Link to={`/classroom?id=${classId}`} className="btn btn-primary btn-lg startbtn m-t-20">进入学习</Link>
              <Link to={{ pathname: '/classroomcreatedetail', search: `?id=${classId}`, state: publication }} className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑项目</Link>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="项目团队" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ProjectTeam data={publication} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="项目描述" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ProjectDescription data={publication} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="网络要求" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <Network data={publication} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="技术架构" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <Technical data={publication} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="项目特色" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ItemAdvantage data={publication} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="项目视频" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ProjectVideos data={publication.videos} />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="服务计划" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ServicePlan data={publication} />
            </div>
          </div>
        </Tab.Item>
      </Tab>
    </Fragment>
  );
};
