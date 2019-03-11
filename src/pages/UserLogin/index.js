import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from '../../components/Login';
import './index.scss';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="signup-form" >
          <Login />
        </div>
        <Footer />
      </div>
    );
  }
}
