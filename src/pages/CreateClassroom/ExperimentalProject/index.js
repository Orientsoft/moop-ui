import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <form className="needs-validation" >
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">选择实验</label>
          <div className="col-sm-8">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
              添加实验模板
            </button>
            <ul className="list-group list-group-flush m-t-20 course">
              <li className="list-group-item">
                <a href="#" role="button" data-toggle="modal" data-target=".bd-example-modal-lg" >一、 Python 3 Programming 专项实验</a>
                <a href="#" className="cbtn cclose" data-toggle="modal" data-target="#exampleclose"><span aria-hidden="true" >×</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↑</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↓</span></a>
                <a href="#" className="cbtn" role="button" data-toggle="modal" data-target=".bd-example-modal-lg" ><span aria-hidden="true">✎</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">■</span></a>
              </li>
              <li className="list-group-item">
                <a href="#" >二、Python 3零基础完全入门</a>
                <a href="#" className="cbtn cclose" data-toggle="modal" data-target="#exampleclose"><span aria-hidden="true">×</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↑</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↓</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">✎</span></a>
                <a href="#" className="cbtn playcbtn"><span aria-hidden="true">►</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label for="validationCustom03" className=" col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <div className="col-sm-8">
              <p className="m-t-20"><Link to="#" className="btn btn-primary  addcouse">下一步 </Link></p>
            </div>
          </div>
        </div>
      </form>
   </div>
  );
};
