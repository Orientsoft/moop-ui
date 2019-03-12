import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Checkbox,
  Select,
  DatePicker,
  Switch,
  Radio,
  Grid,
  Form,
} from '@alifd/next';

const { Row, Col } = Grid;

// FormBinder 用于获取表单组件的数据，通过标准受控 API value 和 onChange 来双向操作数据
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;


const formItemLayout = {
  labelCol: { xxs: "2", s: "7", l: "67", },
  wrapperCol: { s: "12", l: "12", }
};

export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: 'test',
        area: 'location1',
        time: [],
        delivery: false,
        type: ['地推活动'],
        resource: '线下场地免费',
        extra: '',
      },
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {

  };

  submit = (value, error) => {
    console.log('error', error, 'value', value);
    if (error) {
      // 处理表单报错
    }
    // 提交当前填写的数据
  };

  render() {
    return (
      <div className="create-activity-form">
        <IceContainer title="专题发布" style={styles.container}>
          <Form
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <FormItem {...formItemLayout} label="专题名称："
              required
              requiredMessage="专题名称必须填写"
            >
              <Input name="name" style={{ width: '100%' }} />
            </FormItem>

            {/* <FormItem {...formItemLayout} required label="活上传专题封面：">
              <Select
                name="area" style={{ width: '100%' }} 
                dataSource={[
                  { label: '区域一', value: 'location1' },
                  { label: '区域二', value: 'location2' },
                ]}
              />
            </FormItem> */}
            <FormItem {...formItemLayout} required label="专题描述：">
              <Input.TextArea name="extra" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout} required label="预备知识：">
              <Input.TextArea name="extra" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout} required label="考核内容：">
              <Input.TextArea name="extra" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout} label="参考资料：">
              <Input name="name" style={{ width: '100%', marginBottom: '20px' }} />
              <Input type="file" style={{ width: '100%', marginBottom: '20px' }} />
              <Form.Submit type="primary" validate onClick={this.submit} style={{ marginBottom: '20px' }}>
                添加文件
              </Form.Submit>
              <Input placeholder="https://alibaba.github.io/ice/" type="url"style={{ width: '100%', marginBottom: '20px' }} />
              <Form.Submit type="primary" validate onClick={this.submit}>
                添加文件
              </Form.Submit>
            </FormItem>

            <FormItem {...formItemLayout} label="专题特点：">
              <Input.TextArea name="extra" style={{ width: '100%' }} />
            </FormItem>
            {/* <FormItem {...formItemLayout} label="活动时间：" >
              <RangePicker name="time" showTime />
            </FormItem> */}

            {/* <FormItem {...formItemLayout} label="即时配送：">
              <Switch name="delivery" />
            </FormItem> */}
            <FormItem {...formItemLayout} label="专题是否公开：">
              <RadioGroup
                name="resource"
                dataSource={[
                  { label: '公开', value: '公开' },
                  { label: '私有', value: '私有' },
                ]}
              />
            </FormItem>
            <FormItem {...formItemLayout} label="私有：">
              <CheckboxGroup
                name="type"
                dataSource={[
                  { label: '学生能提交报告', value: '学生能提交报告' },
                  { label: '有评分和打分系统', value: '有评分和打分系统' },
                  { label: '老师写评语', value: '老师写评语' },
                ]}
              />
            </FormItem>
            <FormItem {...formItemLayout} label="活动形式：">
              <Input.TextArea name="extra" style={{ width: '100%' }} />
            </FormItem>

            <FormItem {...formItemLayout} label=" ">
              <Form.Submit type="primary" validate onClick={this.submit}>
                下一步
              </Form.Submit>
            </FormItem>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};