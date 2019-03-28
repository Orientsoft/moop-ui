import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="form-row row">
        <label className=" col-sm-1 col-form-label"></label>
        <div className="col-sm-8">
          <button className="btn btn-primary " type="submit" data-toggle="modal" data-target="#studentlist">导入学生列表</button>
          <p className="m-t-20">你还没有添加学生，请添加学生</p>
        </div>
      </div>
      <div className="form-row row m-t-20">
        <label className=" col-sm-1 col-form-label"></label>
        <div className="col-sm-10">
          <table className="table table-bordered part-table">
            <tbody>
              <tr>
                <th>学生身份信息</th>
                <th>姓名</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>072120019098922 / forever98@qq.com</td>
                <td>王森林</td>
                <td><button type="button" className="btn btn-secondary btn-sm">删除</button></td>
              </tr>
              <tr>
                <td>072120019098922</td>
                <td>尚未注册</td>
                <td><button type="button" className="btn btn-secondary btn-sm">删除</button></td>
              </tr>
              <tr>
                <td>072120019098922</td>
                <td>尚未注册</td>
                <td><button type="button" className="btn btn-secondary btn-sm">删除</button></td>
              </tr>
              <tr>
                <td>072120019098922</td>
                <td>王森林</td>
                <td><button type="button" className="btn btn-secondary btn-sm">删除</button></td>
              </tr>

            </tbody>
          </table>
          <p className="m-t-20">已导入35个学生，有5个学生已注册。</p>
          <p className="m-t-20"><Link to="#" className="btn btn-primary  addcouse">下一步 </Link></p>
        </div>
      </div>
    </div>
  );
};
