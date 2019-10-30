import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Message } from '@alifd/next';
import { user } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [values, setValues] = useState({});
  const [closeTip, setCloseTip] = useState(false);
  const onSubmit = () => {
    const { name, key } = values;

    if (name && key) {
      user.login({ data: { name, key } }).then(({ data }) => {
        if (!data.gender) {
          data.gender = consts.sex.MALE;
        }
        if (!data.thumb) {
          if (data.gender === consts.sex.MALE) {
            data.thumb = '/static/images/headerboy.png';
          } else {
            data.thumb = '/static/images/headgirl.png';
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
          // history.push('/users/profile');
          history.push('/');
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

  useEffect(() => {
    const { state } = history.location;

    if (state && state.token) {
      user.login({ data: { token: state.token } }).then(({ data }) => {
        if (!data.gender) {
          data.gender = consts.sex.MALE;
        }
        if (!data.thumb) {
          if (data.gender === consts.sex.MALE) {
            data.thumb = '/static/images/headerboy.png';
          } else {
            data.thumb = '/static/images/headgirl.png';
          }
        }
        setCurrentUser(data);
        // history.push(`/classroom?id=${data.classroom}`);
        history.push('/flow');
      });
    }
  }, []);

  return (
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60 povr">
        <h2 className="text-center">
          <Link className="navbar-brand logo" to="/">
            <img height="70" src="/static/images/logo.jpg" alt="西南财经大学 金融学院" />
          </Link>
        </h2>
        <div className="reg_tipbox" style={{ display: closeTip ? 'none' : '' }}>
          {/* <a href="#" className="closebnt" onClick={() => setCloseTip(true)}></a> */}
          <h4>评审专家登录</h4>
          <div className="reg_tipinfo">&nbsp;评审专家用户名与密码：<br />&nbsp;用户名：<span>test01</span><br />密&nbsp;&nbsp;&nbsp;&nbsp;码：<span>moopjinrong</span></div>
        </div>

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
                      <Link to="/forgot_pass">忘记密码?</Link>
                    </div>
                  </div>
                  <div className="form-group text-center m-t-40">
                    <div className="col-12">
                      <button className="btn loginbnt btn-block" onClick={onSubmit}>登录</button>
                    </div>
                  </div>
                  <div className="form-group m-t-30 m-b-0">
                    <div className="col-12">没有帐号？<Link to="/register">注册</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-30">
        <span className="fade-half">© 版权所有 西南财经大学</span>
      </div>
    </div>
  );
};
