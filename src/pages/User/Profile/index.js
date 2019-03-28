import React, { Fragment } from 'react';
import Tab from '@/components/Tab';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large ">设置</h2>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="设置" className="bg-white m-t-40 p-b-60">
          <div className="container p-b-60 ">
            <form className="needs-validation" noValidate>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom01" className="import col-sm-2 col-form-label">用户名</label>
                <div className="col-sm-6 m-t-10">
                  <b>sylforever98</b>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom01" className="import col-sm-2 col-form-label">头像</label>
                <div className="col-sm-6">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile">请上传头像</label>
                  </div>
                  <div className="valid-feedback">请上传头像</div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">真实姓名</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom03" placeholder="李小林" required />
                  <div className="invalid-feedback">请填写正确真实姓名</div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">身份认证信息</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom03" placeholder="学号 / 学校邮箱..." required />
                  <div className="invalid-feedback">
                    请填写你的学生证号
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom02" className=" col-sm-2 col-form-label">常用邮箱</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom02" placeholder="First name" value="forever@163.com" required />
                  <div className="valid-feedback">
                    请填写正确常用邮箱
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">手机帐号</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom03" placeholder="134****8878" required />
                  <div className="invalid-feedback">
                    请填写正确手机帐号
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label">性别</label>
                <div className="col-sm-6 p-t-10">
                  <div className="form-check float-left">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" htmlFor="exampleRadios1">男</label>
                  </div>
                  <div className="form-check float-left m-l-10">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="exampleRadios2">女</label>
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label" />
                <div className="col-sm-6">
                  <button className="btn btn-primary " type="submit">提交</button>
                </div>
              </div>
            </form>
          </div>
        </Tab.Item>
        <Tab.Item title="密码修改" className="bg-white m-t-40 p-b-60">
          <div className="container p-b-60 ">
            <form className="needs-validation" noValidate>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom01" className="import col-sm-2 col-form-label">原始密码</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="********" required />
                  <div className="valid-feedback">
                      请填写原始密码
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">新密码</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom03" placeholder="密码由26个字母与数字组成8个" required />
                  <div className="invalid-feedback">
                    请填写你的新密码
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom02" className="import col-sm-2 col-form-label">再输入一次</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="validationCustom02" placeholder="****" value="********" required />
                  <div className="valid-feedback">
                    请再输入一次
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label" />
                <div className="col-sm-6">
                  <button className="btn btn-primary " type="submit">提交</button>
                </div>
              </div>
            </form>
          </div>
        </Tab.Item>
      </Tab>
    </Fragment>
  );
};
