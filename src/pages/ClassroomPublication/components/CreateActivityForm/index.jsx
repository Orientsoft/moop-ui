import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Checkbox, Grid, Form } from '@alifd/next';
// import './SettingsForm.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;




const formItemLayout = {
  labelCol: { xxs: 6, s: 6, l: 6 },
  wrapperCol: { s: 12, l: 10 },
};


function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

export default class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        gender: 'male',
        notice: false,
        email: '',
        avatar: [],
        siteUrl: '',
        githubUrl: '',
        twitterUrl: '',
        description: '',
      },
    };
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="settings-form">
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange} ref="form">
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>专题发布</h2>

              <FormItem
                size="large"
                label="专题名称："
                {...formItemLayout}
                required
                maxLength={10}
                requiredMessage="必填"
              >
                <Input name="name" placeholder="于江水" />
              </FormItem>
              <FormItem size="large" {...formItemLayout} required label="专题描述：">
                <Input.TextArea name="extra" style={{ width: '100%' }} />
              </FormItem>
              <FormItem size="large" {...formItemLayout} required label="预备知识：">
                <Input.TextArea name="extra" style={{ width: '100%' }} />
              </FormItem>
              <FormItem size="large" {...formItemLayout} required label="考核内容：">
                <Input.TextArea name="extra" style={{ width: '100%' }} />
              </FormItem>
              <FormItem size="large" {...formItemLayout} label="参考资料：">
                <Input name="name" style={{ width: '100%', marginBottom: '20px' }} />
                <Form.Submit type="primary" validate onClick={this.submit} style={{ marginBottom: '20px' }}>
                  添加文件
                </Form.Submit>
                <Input placeholder="https://alibaba.github.io/ice/" type="url" style={{ width: '100%', marginBottom: '20px' }} />
                <Form.Submit type="primary" validate onClick={this.submit}>
                  添加文件
                </Form.Submit>
              </FormItem>

              <FormItem size="large" {...formItemLayout} label="专题特点：">
                <Input.TextArea name="extra" style={{ width: '100%' }} />
              </FormItem>
              <FormItem size="large" {...formItemLayout} label="专题是否公开：">
                <RadioGroup
                  name="resource"
                  dataSource={[
                    { label: '公开', value: '公开' },
                    { label: '私有', value: '私有' },
                  ]}
                />
              </FormItem>
              <FormItem size="large" {...formItemLayout} label="私有：">
                <CheckboxGroup
                  name="type"
                  dataSource={[
                    { label: '学生能提交报告', value: '学生能提交报告' },
                    { label: '有评分和打分系统', value: '有评分和打分系统' },
                    { label: '老师写评语', value: '老师写评语' },
                  ]}
                />
              </FormItem>
              <Row style={{ marginTop: 20 }}>
                <Col offset="6">
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
