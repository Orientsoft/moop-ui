import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <form className="needs-validation">
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">上传数据包</label>
          <div className="col-sm-8">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label">选择zip</label>
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">上传数据文件</label>
          <div className="col-sm-8">
            <div className="custom-file ">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" >选择csv</label>
            </div>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label className=" col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <button className="btn btn-primary " type="submit">添加数据文件</button>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label  className=" col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <p className="m-t-20"><Link to="#" className="btn btn-primary  addcouse">下一步 </Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};
