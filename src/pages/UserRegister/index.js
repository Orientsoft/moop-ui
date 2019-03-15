import React, { Component } from 'react';
import { Input, Grid, Form } from '@alifd/next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { user } from '../../utils/api';
import roles from '../../utils/roles';
import './index.scss';

const { Row } = Grid;
const FormItem = Form.Item;

export default class SignupForm extends Component {
  onSubmit = (value) => {
    user.create({
      data: { ...value, role: roles.user.STUDENT },
    }).then(() => this.props.history.push('/user/login'));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="signup-form" >
          <div style={styles.formContainer}>
            <h4 style={styles.formTitle}>注册</h4>
            <Form>
              <FormItem required requiredMessage="必填" style={styles.formItem}>
                <Input style={styles.formItemInput} name="name" hasBorder={false} maxLength={20} placeholder="会员名/邮箱/手机号" />
              </FormItem>

              <FormItem style={styles.formItem} required requiredMessage="必填" >
                <Input style={styles.formItemInput} name="key" hasBorder={false} htmlType="password" placeholder="密码" />
              </FormItem>

              <FormItem style={styles.formItem}>
                <Form.Submit
                  type="primary"
                  onClick={this.onSubmit}
                  validate
                  style={styles.submitBtn}
                >
                  注 册
                </Form.Submit >
              </FormItem>

              <Row className="tips" style={styles.tips}>
                <a href="/" style={styles.link}>
                  登录
                </a>
                <span style={styles.line}>|</span>
                <a href="#/user/register" style={styles.link}>
                      忘记密码
                </a>
              </Row>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  formContainer: {
    marginTop: '140px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px 60px',
    background: '#f8f8f8',
    // borderRadius: '6px',
    // boxShadow: '1px 1px 2px #eee',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
  },
  formItemInput: {
    border: '1px #ccc solid',
  },
  formTitle: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: 'rgb(46, 188, 79)',
    fontSize: '20px',
    letterSpacing: '12px',
  },
  inputIcon: {
    color: '#999',
  },
  submitCheckbox: {
    color: '#999',
  },
  submitBtn: {
    width: '240px',
    background: 'rgb(46, 188, 79)',
  },
  tips: {
    textAlign: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};
