import React, { Fragment, useState, useRef } from 'react';
import { Upload } from '@alifd/next';
import API from '@pixcai/make-api';
import Tab from '@/components/Tab';
import { user as userAPI } from '@/utils/api';
import { getCurrentUser, setCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';

export default () => {
  const [user, setUser] = useState(getCurrentUser());
  const [password, setPassword] = useState({ value: '', repeat: '' });
  const uploader = useRef(null);
  const setField = name => e => setUser({ ...user, [name]: e.target.value.trim() });
  const onSubmit = () => {
    const { realname, certification, email, mobile, gender } = user;

    if (realname && certification && mobile) {
      if (uploader) {
        uploader.current.getInstance().startUpload();
      }
      userAPI.update({
        data: { realname, certification, email, mobile, gender },
      }, { userId: user.id }).then(({ data }) => setCurrentUser(data));
    }
  };
  const onUpdatePassword = () => {
    const { value, repeat } = password;

    if (value && repeat && value === repeat) {
      userAPI.update({ data: { key: value } }, { userId: user.id });
    }
  };

  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large">设置</h2>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="设置" className="bg-white m-t-40 p-b-60">
          <div className="container p-b-60 ">
            <div className="needs-validation">
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom01" className="import col-sm-2 col-form-label">用户名</label>
                <div className="col-sm-6 m-t-10">
                  <b>{user.name}</b>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom01" className="import col-sm-2 col-form-label">头像</label>
                <div className="col-sm-6">
                  <Upload
                    action={`${API.request.defaults.baseURL}/users/thumb`}
                    autoUpload={false}
                    ref={uploader}
                    limit={1}
                    listType="image"
                  >
                    <label className="custom-file-label" htmlFor="customFile">请上传头像</label>
                  </Upload>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">真实姓名</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" onChange={setField('realname')} id="validationCustom03" value={user.realname} required />
                  <div className="invalid-feedback">请填写正确真实姓名</div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">身份认证信息</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" onChange={setField('certification')} id="validationCustom03" value={user.certification} required />
                  <div className="invalid-feedback">
                    请填写你的学生证号
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom02" className=" col-sm-2 col-form-label">常用邮箱</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" onChange={setField('email')} id="validationCustom02" value={user.email} />
                  <div className="valid-feedback">
                    请填写正确常用邮箱
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">手机号</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" onChange={setField('mobile')} id="validationCustom03" value={user.mobile} required />
                  <div className="invalid-feedback">
                    请填写正确手机帐号
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label">性别</label>
                <div className="col-sm-6 p-t-10">
                  <div className="form-check float-left">
                    <input className="form-check-input" type="radio" onChange={setField('gender')} id="exampleRadios1" value={consts.sex.MALE} checked={user.gender == consts.sex.MALE} />
                    <label className="form-check-label" htmlFor="exampleRadios1">男</label>
                  </div>
                  <div className="form-check float-left m-l-10">
                    <input className="form-check-input" type="radio" onChange={setField('gender')} id="exampleRadios2" value={consts.sex.FEMALE} checked={user.gender == consts.sex.FEMALE} />
                    <label className="form-check-label" htmlFor="exampleRadios2">女</label>
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label" />
                <div className="col-sm-6">
                  <button className="btn btn-primary " onClick={onSubmit}>提交</button>
                </div>
              </div>
            </div>
          </div>
        </Tab.Item>
        <Tab.Item title="密码修改" className="bg-white m-t-40 p-b-60">
          <div className="container p-b-60 ">
            <div className="needs-validation">
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className="import col-sm-2 col-form-label">新密码</label>
                <div className="col-sm-6">
                  <input type="password" onChange={e => setPassword({ ...password, value: e.target.value.trim() })} value={password.value} className="form-control" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    请填写你的新密码
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom02" className="import col-sm-2 col-form-label">再输入一次</label>
                <div className="col-sm-6">
                  <input type="password" onChange={e => setPassword({ ...password, repeat: e.target.value.trim() })} value={password.repeat} className="form-control" id="validationCustom02" required />
                  <div className="valid-feedback">
                    请再输入一次
                  </div>
                </div>
              </div>
              <div className="form-row row m-t-20">
                <label htmlFor="validationCustom03" className=" col-sm-2 col-form-label" />
                <div className="col-sm-6">
                  <button className="btn btn-primary" onClick={onUpdatePassword}>提交</button>
                </div>
              </div>
            </div>
          </div>
        </Tab.Item>
      </Tab>
    </Fragment>
  );
};
