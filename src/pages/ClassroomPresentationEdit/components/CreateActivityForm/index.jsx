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
            <FormItem {...formItemLayout} label="申报名称："
              required
              requiredMessage="专题名称必须填写"
            >
              <Input name="name" style={{ width: '100%' }} />
            </FormItem>

            <FormItem {...formItemLayout} required label="所属专业：">
              <Select
                name="area" style={{ width: '100%' }} 
                dataSource={[
                  { label: '电子类', value: 'location1' },
                  { label: '物理类', value: 'location2' },
                ]}
              />
            </FormItem>
            <FormItem {...formItemLayout} required label="对应专：">
              <Select
                name="area" style={{ width: '100%' }}
                dataSource={[
                  { label: '电子类', value: 'location1' },
                  { label: '物理类', value: 'location2' },
                ]}
              />
            </FormItem>
            <FormItem {...formItemLayout} required label="学校：">
              <Input name="name" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout} required label="预备知识：">
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
