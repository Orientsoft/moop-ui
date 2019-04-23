import React from 'react';
import { Form, Field, Checkbox, DatePicker, Dialog, Message } from '@alifd/next';
import moment from 'moment';
import { tag as tagAPI, classroom } from '@/utils/api';

export default class Step3 extends React.Component {
  state = { tags: [] };

  field = new Field(this);

  componentDidMount() {
    const values = this.props.getData();

    if (values) {
      const { startTime, endTime, tags, ...restValues } = values;
      this.field.setValues({
        ...restValues,
        tags: tags.map(tag => tag.id),
        timeRange: [moment(startTime), moment(endTime)],
      });
    }
    tagAPI.selectAll().then(({ data }) => this.setState({
      tags: data.map(item => ({ label: item.name, value: item.id })),
    }));
  }

  onSubmit = () => {
    const { setData, setClassroom, getClassroom } = this.props;

    this.field.validate((error, values) => {
      if (!error) {
        const { timeRange, tags, ...restValues } = values;
        const postData = { tags, startTime: timeRange[0], endTime: timeRange[1] };

        setData({ ...restValues, ...postData });
        classroom.update({ data: postData, params: { embed: 1 } }, { classroomId: getClassroom().id }).then(({ data }) => {
          setClassroom(data);
          setData({
            tags: data.tags,
            startTime: data.startTime,
            endTime: data.endTime,
          });
          Message.success('更新成功');
        }).catch(e => Dialog.alert({
          title: '保存失败',
          content: e.message,
        }));
      }
    });
  }

  render() {
    const { tags } = this.state;
    const { labelSpan, wrapperSpan } = this.props;

    return (
      <Form labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }} field={this.field} className="centminheight">
        <Form.Item label="设置时间：" required>
          <DatePicker.RangePicker name="timeRange" />
        </Form.Item>
        <Form.Item label="添加标签：" required>
          <Checkbox.Group name="tags" dataSource={tags} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
          <Form.Submit type="primary" onClick={this.onSubmit} className="serverbtn">保存</Form.Submit>
        </Form.Item>
      </Form>
    );
  }
}
