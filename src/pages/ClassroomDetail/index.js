import React, { Fragment, useState, useEffect } from 'react';
import Tab from '@/components/Tab';
import { Link } from 'react-router-dom';
import { publication as publicationAPI } from '@/utils/api';
import ProjectTeam from './ProjectTeam';
import ProjectDescription from './ProjectDescription';
import Network from './Network';
import Technical from './Technical';
import ProjectVideos from './ProjectVideos';
import ItemAdvantage from './ItemAdvantage';
import ServicePlan from './ServicePlan';

export default ({ location }) => {
  const [publication, setPublication] = useState({});

  useEffect(() => {
    publicationAPI.select({}, { classroomId: location.state.id }).then(({ data }) => {
      setPublication(data);
    });

    return () => sessionStorage.removeItem('PUBLICATION');
  }, []);

  return (
    <Fragment>
      <div className="bg-conttop bg-detail p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{publication.name}</h2>
              <ul className="text-transparent m-t-20">
                <li>所属院校：{publication.school}</li>
                <li>对应专业：勘查技术与工程</li>
                <li>学校：{publication.school}</li>
                <li> 负责人：刘财</li>
              </ul>
              <Link to="/classroom" className="btn btn-primary btn-lg startbtn m-t-20">进入学习</Link>
              <Link to="/classroomcreatedetail" className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑项目</Link>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="项目团队" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ProjectTeam />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="项目描述" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ProjectDescription />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="网络要求" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <Network />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="技术架构" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <Technical />
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="项目特色" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ItemAdvantage />
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
              <ServicePlan />
            </div>
          </div>
        </Tab.Item>
      </Tab>
    </Fragment>
  );
};
