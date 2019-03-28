import React from 'react';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <form className="needs-validation">
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">专题名称</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="例如：计算机程序设计（Python 3）" required="" />
            <div className="valid-feedback">
                例如：计算机程序设计（Python 3）
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">上传专题封面</label>
          <div className="col-sm-8">
            <div className="custom-file ">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" >jpg,png</label>
            </div>
            <div className="valid-feedback">
              请上传专题封面
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">专题描述</label>
          <div className="col-sm-8">
            <textarea type="textarea" className="form-control" rows="5" placeholder="本专题以Python3语言为载体，讲授计算机程序设计，为更好地利用计算机解决工程实践、科学研究和日常生活中的问题打下基础。" />
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">预备知识</label>
          <div className="col-sm-8">
            <textarea type="textarea" className="form-control" rows="5" id="validationCustom04" placeholder="本专题面向零基础同学。学习过“大学计算机基础”或其他计算机专题对学习有帮助，但不是必要的。" />
            <div className="valid-feedback">
              请填写预备知识
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">考核内容</label>
          <div className="col-sm-8">
            <textarea type="textarea" className="form-control" rows="5" id="validationCustom05" placeholder="学习本专题，积极参与专题讨论，完成本课的平时练习和期末测验，成绩合格获得合格证书，成绩优秀获得优秀证书。评分依据：专题满分100分。专题讨论（讨论区提问和回答其他同学问题）占10%，平时测验占60%(每周单元测试20%，编程作业40%)；期末测验占30%。60分获得合格证书，80-100分获得优秀证书。" />
            <div className="invalid-feedback">
              请填写考核内容
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="col-sm-2 col-form-label">参考资料</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="教材书1，教材书2，教材书3" required="" />
            <div className="input-group mb-3 m-t-20">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">网站 (http(s)://..)</span>
              </div>
              <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
            <button className="btn btn-primary " type="submit">添加</button>
            <div className="invalid-feedback">
            请填写参考资料
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="col-sm-2 col-form-label">专题特点</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="1，100% 在线实验，立即开始，按照自己的计划学习。" required="" />
            <input type="text" className="form-control m-t-20" id="validationCustom01" placeholder="First name" value="2，灵活的计划，立即开始，按照自己的计划学习。" required="" />
            <input type="text" className="form-control m-t-20" id="validationCustom01" placeholder="First name" value="3，初级，初级易懂。" required="" />
            <input type="text" className="form-control m-t-20" id="validationCustom01" placeholder="First name" value="4，完成时间大约为1个月，建议 14 小时/周" required="" />
            <div className="invalid-feedback">
            请填写专题特点
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">专题是否公开</label>
          <div className="col-sm-8 m-t-10">
            <div className="form-check float-left">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label className="form-check-label" >
                公开<span className="text-secondary">（对所有学生开放）</span>
              </label>
            </div>
            <div className="form-check float-left m-l-10">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" >
                私有 <span className="text-secondary">（只对本专题的学生开放）</span>
              </label>
            </div>
            <div className="invalid-feedback">
              请填写考核内容
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className=" col-sm-2 col-form-label">私有</label>
          <div className="col-sm-8">
            ▵ 学生能提交报告<br /><br />
            ▵ 有评分和打分系统<br /><br />
            ▵ 老师写评语<br /><br />
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className=" col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <p className="m-t-20"><a href="createcourse.html" className="btn btn-primary  addcouse">下一步</a></p>
          </div>
        </div>
      </form>
    </div>
  );
};
