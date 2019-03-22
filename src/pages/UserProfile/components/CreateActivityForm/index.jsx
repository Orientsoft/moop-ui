import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Upload, Grid, Form } from '@alifd/next';
import API from '@pixcai/make-api';
import get from 'lodash-es/get';
import { user } from '../../../../utils/api';
import { setCurrentUser, getCurrentUser } from '../../../../utils/helper';
import './SettingsForm.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 },
};

export default class SettingsForm extends Component {
  constructor(props) {
    super(props);

    this.current = getCurrentUser();

    this.state = {
      value: {
        name: get(this.current, 'name', ''),
        email: get(this.current, 'email', ''),
        avatar: [],
        mobile: get(this.current, 'mobile', ''),
      },
    };
  }

  validateAllFormField = (values, errors) => {
    if (!errors) {
      const { name, email, mobile } = values;
      user.update({ data: { name, email, mobile } }, { userId: get(this.current, 'id') })
        .then((data) => {
          setCurrentUser(data.data);
          location.reload();
        });
    }
  };

  render() {
    return (
      <div className="settings-form">
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange}>
            <div style={styles.formContent}>
              {/* <h2 style={styles.formTitle}>基本设置</h2> */}

              <FormItem
                size="large"
                label="姓名："
                {...formItemLayout}
                required
                maxLength={10}
                requiredMessage="必填"
              >
                <Input name="name" />
              </FormItem>
              <FormItem
                size="large"
                label="头像："
                {...formItemLayout}
              >
                <Upload.Card
                  name="thumb"
                  listType="card"
                  action={`${API.request.defaults.baseURL}/users/thumb`}
                  accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                />
              </FormItem>
              <FormItem
                size="large"
                label="手机："
                {...formItemLayout}
                required
              >
                <Input htmlType="text" name="mobile" />
              </FormItem>
              <FormItem
                size="large"
                label="邮件："
                {...formItemLayout}
                required
                requiredMessage="请输入正确的邮件"
              >
                <Input htmlType="email" name="email" />
              </FormItem>
              <Row style={{ marginTop: 20 }}>
                <Col offset="3">
                  <Form.Submit
                    size="large"
                    type="primary"
                    style={{ width: 100 }}
                    validate
                    onClick={this.validateAllFormField}
                  >
                    提 交
                  </Form.Submit>
                </Col>
              </Row>
            </div>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    paddingTop: 20,
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
