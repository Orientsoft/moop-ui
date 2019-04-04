import React from 'react';

export default ({ onNext }) => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="needs-validation" >
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">申报名称</label>
          <div className="col-sm-8 m-t-10">
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="例如：计算机程序设计（Python 3）" required="" />
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">学校</label>
          <div className="col-sm-8 m-t-10">
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="例如：吉林大学" required="" />
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">所属专业</label>
          <div className="col-sm-8">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>地球探测科学与技术学院</option>
              <option>地质类</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">对应专业</label>
          <div className="col-sm-8">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>勘查技术与工程</option>
              <option>计算机与科学</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">上传项目广告</label>
          <div className="col-sm-8">
            <div className="custom-file ">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" >jpg,png最大支持2M,尺寸大小1600*300</label>
            </div>
            <div className="valid-feedback">
                请上传项目广告
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className=" col-sm-2 col-form-label" />
          <div className="col-sm-8">
            <p className="m-t-20"><button className="btn btn-primary addcouse" onClick={onNext}>下一步</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};
