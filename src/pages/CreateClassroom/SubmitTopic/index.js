import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <form className="needs-validation">
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">设置时间</label>
          <div className="col-sm-8">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="">开始与结束时间</span>
              </div>
              <input type="text" className="form-control" />
              <input type="text" className="form-control" />
            </div>
            <div className="valid-feedback">
                  开始与结束时间
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">添加标签</label>
          <div className="col-sm-8 m-t-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="form-check-label" >计算机</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
              <label className="form-check-label">外语</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
              <label className="form-check-label" >经济学</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
              <label className="form-check-label" >管理学</label>
            </div>
            <div className="valid-feedback">
              请添加标签
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className=" col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <p className="m-t-20">
              <Link to="#" className="btn btn-primary m-r-10 savecouse">保存 </Link>
              <Link to="#" className="btn btn-primary  addcouse" data-toggle="modal" data-target="#publish">立即发布 </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
