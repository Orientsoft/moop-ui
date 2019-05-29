import React from 'react';
import { Form, Field, Checkbox, DatePicker, Dialog } from '@alifd/next';
import moment from 'moment';
import { tag as tagAPI, classroom } from '@/utils/api';

export default class Step3 extends React.Component {
  state = { tags: [] };

  field = new Field(this);

  componentDidMount() {
    const values = this.props.getData();

    if (values) {
      const { startTime, endTime, ...restValues } = values;
      this.field.setValues({
        ...restValues,
        timeRange: [moment(startTime), moment(endTime)],
      });
    }
    tagAPI.selectAll().then(({ data }) => this.setState({
      tags: data.map(item => ({ label: item.name, value: item.id })),
    }));
  }

  onSubmit = () => {
    const { toNext, setData, getPostData, setClassroom } = this.props;

    this.field.validate((error, values) => {
      if (!error) {
        const { timeRange, ...restValues } = values;

        setData({ ...restValues, startTime: timeRange[0], endTime: timeRange[1] });
        Dialog.confirm({
          title: '创建课题',
          content: '确定创建？',
          onOk: () => classroom.create({ data: getPostData() }).then(({ data }) => {
            setClassroom(data);
            toNext();
          }).catch(e => Dialog.alert({
            title: '创建失败',
            content: e.message,
          })),
        });
      }
    });
  }

  render() {
    const { tags } = this.state;
    const { labelSpan, wrapperSpan } = this.props;

    return (
      <div className="centminheight">
        <Form labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }} field={this.field}>
          <Form.Item label="设置时间：" required>
            <DatePicker.RangePicker name="timeRange" />
          </Form.Item>
          <Form.Item label="添加标签：" required>
            <Checkbox.Group name="tags" dataSource={tags} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
            <Form.Submit type="primary"  onClick={this.onSubmit} className="serverbtn">创建课题</Form.Submit>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
