import React, { useState } from 'react';
import { Grid, Upload, Button, Dialog, Message } from '@alifd/next';
import Markdown from 'react-markdown';
import { makeMarkdownUploadUrl, publication } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ data = {} }) => {
  const [contents, setContents] = useState({});
  const [visible, setVisible] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const onFinish = i => response => setContents({ ...contents, [i]: response.response });
  const onPreview = i => () => {
    setMarkdown(contents[i].markdown);
    setVisible(true);
  };
  const onSubmit = () => {
    const postData = {};
    if (contents[0]) {
      postData.group = contents[0].markdown;
    }
    if (contents[1]) {
      postData.description = contents[1].markdown;
    }
    if (contents[2]) {
      postData.requirement = contents[2].markdown;
    }
    if (contents[3]) {
      postData.architecture = contents[3].markdown;
    }
    if (contents[4]) {
      postData.characteristic = contents[4].markdown;
    }
    if (contents[5]) {
      postData.service = contents[5].markdown;
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
              <label className="import col-sm-2 col-form-label">上传项目团队</label>
              <div className="col-sm-8">
                <div className="custom-file ">
                  <Upload limit={1} listType="text" onSuccess={onFinish(0)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(0)}>
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
                  <Upload limit={1} listType="text" onSuccess={onFinish(1)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(1)}>
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
                  <Upload limit={1} listType="text" onSuccess={onFinish(2)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(2)}>
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
                  <Upload limit={1} listType="text" onSuccess={onFinish(3)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(3)}>
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
                  <Upload limit={1} listType="text" onSuccess={onFinish(4)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(4)}>
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
                  <Upload limit={1} listType="text" onSuccess={onFinish(5)} action={makeMarkdownUploadUrl(data.classroom)}>
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
                <button type="button" className="btn btn-primary" onClick={onPreview(5)}>
                  预览文件
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button className="serverbtn m-t-20" onClick={onSubmit}>保存</Button>
          </div>
        </Col>
      </Row>
      <Dialog title="预览" visible={visible} onOk={() => setVisible(false)} onClose={() => setVisible(false)} onCancel={() => setVisible(false)} style={{ width: 800 }}>
        <Markdown source={markdown} />
      </Dialog>
    </div>
  );
};
