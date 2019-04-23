import React, { useState } from 'react';
import { Grid, Upload } from '@alifd/next';
import { makeMarkdownUploadUrl } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ data }) => {
  const [contents, setContents] = useState({});
  const onFinish = i => response => setContents({ ...contents, [i]: response });

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
              <label className="import col-sm-2 col-form-label">上传项目团队</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(0)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传项目团队word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
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
              <label className="import col-sm-2 col-form-label">上传项目描述</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(1)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传项目描述word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
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
              <label className="import col-sm-2 col-form-label">上传网络要求</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(2)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传网络要求word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
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
              <label className="import col-sm-2 col-form-label">上传技术架构</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(3)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传技术架构word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
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
              <label className="import col-sm-2 col-form-label">上传项目特色</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(4)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传项目特色word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
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
              <label className="import col-sm-2 col-form-label">上传服务计划</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} onSuccess={onFinish(5)}>
                    <label className="custom-file-label">.md</label>
                  </Upload>
                </div>
                <div className="valid-feedback">
                  请上传服务计划word模板
                </div>
              </div>
            </div>
            <div className="form-row row m-t-20">
              <label className="col-sm-2" />
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  预览文件
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
