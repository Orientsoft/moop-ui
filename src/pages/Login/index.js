import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from '@alifd/next';
import { user } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [values, setValues] = useState({});
  const onSubmit = () => {
    const { name, key } = values;

    if (name && key) {
      user.login({ data: { name, key } }).then(({ data }) => {
        if (!data.gender) {
          data.gender = consts.sex.MALE;
        }
        if (!data.thumb) {
          if (data.gender === consts.sex.MALE) {
            data.thumb = '/images/headerboy.png';
          } else {
            data.thumb = '/images/headgirl.png';
          }
        }
        setCurrentUser(data);
        if (data.role === consts.user.CONTRIBUTOR) {
          history.push('/tenant');
        } else if (data.role === consts.user.SUPER) {
          history.push('/contributor');
        } else if (data.check) {
          const from = location.search.match(/[?&]from=([^?&#]+)/);
          let redirectTo = '/';

          if (from) {
            const decodedFrom = decodeURIComponent(from[1]);

            if (!/^\/(contributor|tenant)\/?/.test(decodedFrom)) {
              if (decodedFrom[0] === '/') {
                redirectTo = decodedFrom;
              }
            }
            if (data.role === consts.user.STUDENT) {
              if (!/^\/(courses|classroom|users)/.test(decodedFrom)) {
                redirectTo = '/';
              }
            }
          }
          history.push(redirectTo);
        } else {
          history.push('/users/profile');
        }
      });
    } else {
      Message.error('必填项不能为空');
    }
  };
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const setField = name => e => setValues({ ...values, [name]: e.target.value.trim() });

  return (
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60">
        <h2 className="text-center"><Link className="navbar-brand logo" to="/"><i>M</i><span>oopLab</span></Link></h2>
        <div className="row justify-content-center">
          <div className="col-5">
            <div className=" card-box m-t-20">
              <h3 className="text-center uppercase">登录</h3>
              <div className="panel-body">
                <div className="form-horizontal m-t-30">
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('name')} type="text" required placeholder="用户名" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onKeyUp={onKeyUp} onChange={setField('key')} type="password" required placeholder="密码" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <Link to="/forgot_pass">忘记密码?</Link><br />
                    </div>
                  </div>
                  <div className="form-group text-center m-t-40">
                    <div className="col-12">
                      <button className="btn loginbnt btn-block" onClick={onSubmit}>登录</button>
                    </div>
                  </div>
                  <div className="form-group m-t-30 m-b-0">
                    <div className="col-12">没有帐号？<Link to="/register">注册</Link>
                      <p className="text-secondary pt-2 fs14">
                      专家账号1：&nbsp;zhuanjia01/bwu12345<br />
                      专家账号2：zhuanjia02/bwu12345<br />
                      专家账号3：zhuanjia03/bwu12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-30">
        <span className="fade-half">© 版权所有 北京物资学院</span>
      </div>
    </div>
  );
};
