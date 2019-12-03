import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '@alifd/next';
import queryString from 'query-string';
import { role } from '@/utils/api';
import { setCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [isLoging, setIsLoging] = useState(false);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(false);
  const url = queryString.parse(history.location.search);
  const onLogin = (body) => {
    setIsLoging(true);
    role.login({ data: body }).then(({ data }) => {
      setIsLoging(false);
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
      } else {
        history.push('/');
      }
    }).catch(() => setIsLoging(false));
  };

  useEffect(() => {
    if (url.token) {
      role.list({ data: { token: url.token } }).then(({ data }) => {
        if (data.length) {
          setRoles(data);
        } else {
          setError(true);
        }
      });
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60">
        <h2 className="text-center"><Link className="navbar-brand logo" to="/"><i>M</i><span>oopLab</span></Link></h2>
        <div className="row justify-content-center">
          <div className="col-5">
            <div className=" card-box m-t-20">
              <h3 className="text-center uppercase">{isLoging ? '正在登录' : '请选择角色'}</h3>
              <div className="panel-body">
                <Loading visible={isLoging} tip="登录中..." inline={false} >
                  <div style={{ visibility: isLoging ? 'hidden' : 'visible' }} className="form-horizontal m-t-30">
                    {roles.map(item => (
                      <div key={item.role} className="form-group">
                        <div className="col-12">
                          <a style={{ color: 'white' }} className="btn loginbnt btn-block" onClick={() => onLogin(item)}>{item.name}</a>
                        </div>
                      </div>
                    ))}
                    {error && (
                      <div className="form-group">
                        <div className="col-12">
                          <p className="text-center">权限不足，请联系管理员授权</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Loading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-30">
        <span className="fade-half">© 版权所有 MoopLab</span>
      </div>
    </div>
  );
};
