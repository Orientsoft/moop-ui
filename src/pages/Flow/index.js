import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog } from '@alifd/next';
import classnames from 'classnames';
import moment from 'moment';
import get from 'lodash-es/get';
import { getCourseCover } from '@/utils/helper';
import { container, flow, progress } from '@/utils/api';

export default () => {
  const elem = useRef();
  const [course, setCourse] = useState({});
  const [showNext, setShowNext] = useState(false);
  const getStep = i => get(course, `projects.0.labs.${i}`, {});
  const getURL = id => get(course, `projects.0.labURL.${id}`, '#/');
  const getChild = i => get(course, `projects.0.labs.7.child.${i}`, {});
  const onLearn = () => {
    Dialog.alert({
      title: '启动实验',
      content: '是否确定启动？',
      onOk: () => flow.start().then(({ data }) => setCourse(data)),
    });
  };
  const refetch = () => flow.select().then(res => setCourse(res.data));
  const onStop = () => {
    const id = get(course, 'projects.0.id');

    if (id) {
      Dialog.alert({
        title: '停止',
        content: '是否确认停止？',
        onOk: () => new Promise((resolve, reject) => {
          container.stop({ params: { projectId: id } }).then(() => {
            refetch().then(resolve);
          }).catch(reject);
        }),
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (window.MathJax) {
      const maths = document.querySelectorAll('[data-math]');

      window.MathJax.texReset();
      for (let i = 0; i < maths.length; i += 1) {
        const math = maths[i].getAttribute('data-math');
        let child = maths[i].firstChild;

        while (child) {
          maths[i].removeChild(child);
          child = maths[i].firstChild;
        }
        maths[i].appendChild(window.MathJax.tex2chtml(math));
      }
      window.MathJax.startup.document.clear();
      window.MathJax.startup.document.updateDocument();
    }
    if (course.running && !elem.current.getAttribute('data-ok')) {
      const links = elem.current.querySelectorAll('a.nocolor');

      for (let i = 0; i < links.length; i += 1) {
        const labId = links[i].getAttribute('data-id');

        if (links[i].id === 'next') {
          links[i].addEventListener('click', () => {
            setShowNext(!showNext);
            progress.create({
              data: {
                message: { lab: labId },
              },
            }).then(refetch);
          });
        } else {
          links[i].addEventListener('click', () => {
            setShowNext(false);
            progress.create({
              data: {
                message: { lab: labId },
              },
            }).then(refetch);
          });
        }
      }
      elem.current.setAttribute('data-ok', true);
    }
  }, [course]);

  return (
    <Fragment>
      <div className="bg-mainconttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{course.title}</h2>
              <ul className="text-transparent m-t-20">
                {get(course, 'characteristic', []).map((name, i) => <li key={i}>{name}</li>)}
              </ul>
              <p className="coursetext ">
                学时安排：<span className="text-warning font-weight-bold">{course.timeConsume}</span><br />
                开课时间：<span className="font-italic text-transparent ">{moment(course.startTime).format('YYYY年MM月DD日')} ~ {moment(course.endTime).format('YYYY年MM月DD日')}</span><br />
              </p>
              {course.running ? (
                <a className="btn btn-lg whitebtn m-t-20" onClick={onStop}>结束实验</a>
              ) : (
                <a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onLearn}>启动实验</a>
              )}
            </div>
            <div className="col-12 col-md-5 m-b-30">
              <figure className="figure">
                <img src={getCourseCover(course)} className="figure-img img-fluid" alt={course.title} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div ref={elem} className="main-container p-b-120" style={{ display: course && course.projects ? 'block' : 'none' }}>
        <div className="container p-t-60 text-center ">
          <h2 className="large m-t-60 p-t-120">公司估值虚拟仿真实验流程</h2>
          <div className="row-warp" >
            <div className="row  m-t-60 ">
              <div className="col-md-4">
                <div className="bindex-pro bd999 bdgreen">
                  <a target="_blank" rel="noopener noreferrer" data-id={getStep(0).id} href={getURL(getStep(0).id)} className={classnames({ nocolor: true, bggreen: course.running })}>{getStep(0).name}</a> <br /><br />
                  <span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(0).finish }])}>↓</span><br /><br />
                  <a target="_blank" rel="noopener noreferrer" data-id={getStep(1).id} href={getURL(getStep(1).id)} className={classnames({ nocolor: true, bggreen: getStep(1).finish })}>{getStep(1).name}</a> <br /><br />
                  <span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(1).finish }])}>↓</span><br /><br />
                  <a target="_blank" rel="noopener noreferrer" data-id={getStep(2).id} href={getURL(getStep(2).id)} className={classnames({ nocolor: true, bggreen: getStep(2).finish })}>{getStep(2).name}</a> <br />
                  <p className=" font14 color999 ">模块一：历史报表</p>
                </div>
              </div>
              <div className="col-md-1 right pt200"><span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(2).finish }])}>⇨</span></div>
              <div className="col-md-7 right">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="bindex-pro bd999 bdgreen">
                          <a href="#theNext" id="next" className={classnames({ nocolor: true, bggreen: getStep(7).finish })}>{getStep(7).name}</a> <br /><br />
                          <span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(6).finish }])}>↑</span><br /><br />
                          <a target="_blank" rel="noopener noreferrer" data-id={getStep(6).id} href={getURL(getStep(6).id)} className={classnames({ nocolor: true, bggreen: getStep(6).finish })}>{getStep(6).name}</a> <br />
                          <p className=" font14 color999 ">模块三：估值计算</p>
                        </div>
                      </div>
                      <span className={classnames(['font32', 'color999', 'pt100', { colorgreen: course.running && getStep(7).finish }])}>⇨</span>
                      <div className="col-md-6 fr">
                        <div className="bindex-pro bd999 bdgreen">
                          <a target="_blank" rel="noopener noreferrer" data-id={getStep(8).id} href={getURL(getStep(8).id)} className={classnames({ nocolor: true, bggreen: getChild(21).finish })}>{getStep(8).name}</a> <br />
                          <span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(8).finish }])}>↓</span><br />
                          <a target="_blank" rel="noopener noreferrer" data-id={getStep(9).id} href={getURL(getStep(9).id)} className={classnames({ nocolor: true, bggreen: getStep(9).finish })}>{getStep(9).name}</a> <br />
                          <span className={classnames(['font32', 'color999', { colorgreen: course.running && getStep(9).finish }])}>↓</span><br />
                          <a target="_blank" rel="noopener noreferrer" data-id={getStep(20).id} href={getURL(getStep(10).id)} className={classnames({ nocolor: true, bggreen: getStep(10).finish })}>{getStep(10).name}</a> <br />
                          <p className=" font14 color999 "> 模块四：报告输出</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absol-upbtn">
                    <span className={classnames(['font32', 'color999', 'pl100', { colorgreen: course.running && getStep(5).finish }])}>⇧</span>
                  </div>
                  <div className="col-md-12">
                    <div className="absol-pro2 width28 bd999 bdgreen">
                      <a target="_blank" rel="noopener noreferrer" data-id={getStep(3).id} href={getURL(getStep(3).id)} className={classnames({ nocolor: true, bggreen: getStep(3).finish })}>{getStep(3).name}</a>
                      <span className={classnames(['font18', 'color999', { colorgreen: course.running && getStep(3).finish }])}>→</span>
                      <a target="_blank" rel="noopener noreferrer" data-id={getStep(4).id} href={getURL(getStep(4).id)} className={classnames({ nocolor: true, bggreen: getStep(4).finish })}>{getStep(4).name}</a>
                      <span className={classnames(['font18', 'color999', { colorgreen: course.running && getStep(4).finish }])}>→</span>
                      <a target="_blank" rel="noopener noreferrer" data-id={getStep(5).id} href={getURL(getStep(5).id)} className={classnames({ nocolor: true, bggreen: getStep(5).finish })}>{getStep(5).name}</a>
                      <p className=" font14 color999 "> 模块二：报表预测</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container p-b-120" style={{ display: showNext ? 'block' : 'none' }}>
        <div className="container p-t-60 text-center ">
          <h2 id="theNext" className="large m-t-60 p-t-120">公司估值虚拟仿真实验流程</h2>
          <div className="row-warp" >
            <div className="row  m-t-60 ">
              <div className="col-md-12">
                <div className="absol-pro width30 bd999 bdgreen">
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(0).id)} className={classnames(['nocolor', { bggreen: getChild(0).finish }])} data-math={getChild(0).name} />
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(1).id)} className={classnames(['nocolor', { bggreen: getChild(1).finish }])} data-math={getChild(1).name} />
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(2).id)} className={classnames(['nocolor', { bggreen: getChild(2).finish }])} data-math={getChild(2).name} />
                </div>
                <div className="absol-upbtn">
                  <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(2).finish }])}>⇩</span>
                </div>
                <div className="absol-pro bd999 bdgreen">
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(3).id)} className={classnames(['nocolor', { bggreen: getChild(3).finish }])} data-math={getChild(3).name} />
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(4).id)} className={classnames(['nocolor', { bggreen: getChild(4).finish }])} data-math={getChild(4).name} />
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(5).id)} className={classnames(['nocolor', { bggreen: getChild(5).finish }])} data-math={getChild(5).name} />
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(6).id)} className={classnames(['nocolor', { bggreen: getChild(6).finish }])} data-math={getChild(6).name} />
                </div>
                <div className="absol-upbtn row">
                  <div className="col-1" />
                  <div className="col-5 ">
                    <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(6).finish }])}>⇩</span><br />
                    <em className=" font18 color999 colorgreen" data-math={getChild(7).name} />
                    <em className=" font14 color999 ">现值系数</em><br />
                    <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(6).finish }])}>⇩</span><br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="absol-pro2 width50 bd999 bdblue">
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(8).id)} className={classnames(['nocolor', { bgblue: getChild(6).finish }])} data-math={getChild(8).name} />
                      <span>×</span>
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(9).id)} className={classnames(['nocolor', { bgblue: getChild(6).finish }])} data-math={getChild(9).name} />
                      <p className=" font14 color999 "> 预测期、过渡期</p>
                    </div>
                    <div className="absol-upbtn">
                      <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(9).finish }])}>⇩</span>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="absol-pro2 width30 bd999 bdblue">
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(10).id)} className={classnames(['nocolor', { bgblue: getChild(6).finish }])} data-math={getChild(10).name} />
                      <span>×</span>
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(11).id)} className={classnames(['nocolor', { bgblue: getChild(6).finish }])} data-math={getChild(11).name} />
                      <span>÷</span>
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(12).id)} className={classnames(['nocolor', { bggreen: getChild(12).finish }])} data-math={getChild(12).name} />
                      <p className=" font14 color999 "> 永续期</p>
                    </div>
                    <div className="absol-upbtn">
                      <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(12).finish }])}>⇩</span>
                    </div>
                  </div>
                </div>
                <div className="absol-pro2 width50 bd999 bdgreen">
                  <div className="row">
                    <div className="col-5"><a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(13).id)} className={classnames(['nocolor', { bggreen: getChild(13).finish }])} data-math={getChild(13).name} /></div>
                    <div className="col-7"> <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(14).id)} className={classnames(['nocolor', { bggreen: getChild(14).finish }])} data-math={getChild(14).name} /></div>
                  </div>
                </div>
                <div className="absol-upbtn">
                  <div className="col-4"> <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(14).finish }])}>⇩</span></div>
                </div>
                <div className="absol-pro2 width25 bd999 bdgreen">
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(15).id)} className={classnames(['nocolor', { bggreen: getChild(15).finish }])} data-math={getChild(15).name} />
                  <span>+</span>
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(16).id)} className={classnames(['nocolor', { bggreen: getChild(16).finish }])} data-math={getChild(16).name} />
                  <span>-</span>
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(17).id)} className={classnames(['nocolor', { bggreen: getChild(17).finish }])} data-math={getChild(17).name} />
                  <span>-</span>
                  <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(18).id)} className={classnames(['nocolor', { bggreen: getChild(18).finish }])} data-math={getChild(18).name} />
                </div>
                <div className="absol-upbtn">
                  <div className="col-4"> <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(18).finish }])}>⇩</span></div>
                </div>
                <div className="absol-pro2 width100 bd999 bdgreen">
                  <div className="row">
                    <div className="col-5">
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(19).id)} className={classnames(['nocolor', { bggreen: getChild(19).finish }])} data-math={getChild(19).name} />
                    </div>
                    <div className="col-2">
                      <p className="p-t-20 f14">÷</p>
                    </div>
                    <div className="col-5">
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(20).id)} className={classnames(['nocolor', { bggreen: getChild(20).finish }])} data-math={getChild(20).name} />
                    </div>
                  </div>
                </div>
                <div className="absol-upbtn">
                  <span className={classnames(['font32', 'color999', { colorgreen: course.running && getChild(20).finish }])}>⇩</span>
                </div>
                <div className="row">
                  <div className="col-4" />
                  <div className="col-4">
                    <div className="absol-pro2 width100 bd999 bdgreen">
                      <a target="_blank" rel="noopener noreferrer" data-id={getChild(0).id} href={getURL(getChild(21).id)} className={classnames(['nocolor', { bggreen: getChild(21).finish }])} data-math={getChild(21).name} />
                    </div>
                  </div>
                  <div className="col-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
