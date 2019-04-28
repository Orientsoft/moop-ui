import React, { useState } from 'react';
import { Grid, Button, Message } from '@alifd/next';
import BraftEditor from 'braft-editor';
import { publication } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ data = {} }) => {
  const [contents, setContents] = useState({});
  const onSubmit = () => {
    const postData = {};
    if (contents[0]) {
      postData.group = contents[0].toHTML();
    }
    if (contents[1]) {
      postData.description = contents[1].toHTML();
    }
    if (contents[2]) {
      postData.requirement = contents[2].toHTML();
    }
    if (contents[3]) {
      postData.architecture = contents[3].toHTML();
    }
    if (contents[4]) {
      postData.characteristic = contents[4].toHTML();
    }
    if (contents[5]) {
      postData.service = contents[5].toHTML();
    }
    publication.update({ data: postData }, { classroomId: data.classroom }).then(() => {
      Message.success('保存成功');
    });
  };

  return (
    <div className="m-b-30 m-t-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <Row justify="center">
        <Col span={16}>
          <div className="needs-validation createdcont">
            <h5>项目团队<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载项目团队word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[0]} onChange={s => setContents({ ...contents, 0: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
            <hr />
            <h5>项目描述<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载项目描述word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[1]} onChange={s => setContents({ ...contents, 1: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
            <hr />
            <h5>网络要求<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载网络要求word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[2]} onChange={s => setContents({ ...contents, 2: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
            <hr />
            <h5>技术架构<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载技术架构word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[3]} onChange={s => setContents({ ...contents, 3: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
            <hr />
            <h5>项目特色<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载项目特色word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[4]} onChange={s => setContents({ ...contents, 4: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
            <hr />
            <h5>服务计划<span>（请下载模板填写文档好再上传。）</span></h5>
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">下载word模板</label>
              <div className="col-sm-8 m-t-10">
                <p><a href="#" className="font-weight-bold">请下载服务计划word模板.word</a></p>
              </div>
            </div>
            <div className="form-row row m-t-10 ">
              <BraftEditor value={contents[5]} onChange={s => setContents({ ...contents, 5: s })} style={{ border: '1px solid #C4C6CF ' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button className="serverbtn m-t-20" onClick={onSubmit}>保存</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
