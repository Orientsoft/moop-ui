import React from 'react';
import { Form, Field, Dialog, Grid, Input, Button, Upload, Radio, Message } from '@alifd/next';
import classnames from 'classnames';
import { IMAGE_UPLOAD_URL, classroom as classroomAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default class Step1 extends React.Component {
  state = { thumb: null, material: [], characteristic: [] };

  field = new Field(this);

  componentDidMount() {
    const data = this.props.getData();

    if (data) {
      data.public = Number(data.public);
      this.field.setValues(data);
      this.setState({
        thumb: data.thumb,
        material: data.material,
        characteristic: data.characteristic,
      });
    }
  }

  addMaterial = () => {
    this.setState({ material: [...this.state.material, {}] });
  };

  removeMaterial = (index) => {
    const { material } = this.state;

    material.splice(index, 1);
    this.setState([...material]);
  };

  modifyMaterial = (index, value) => {
    const { material } = this.state;

    material[index] = { ...material[index], ...value };
    this.setState([...material]);
  };

  setCharacteristic = (index, value) => {
    const { characteristic } = this.state;

    characteristic[index] = value;
    this.setState({ characteristic: [...characteristic] });
  };

  onSubmit = () => {
    const { setData, getClassroom, setClassroom } = this.props;
    const { thumb, material, characteristic } = this.state;

    this.field.validate((error, values) => {
      if (!error) {
        if (thumb) {
          values.thumb = thumb.id;
        }
        values.material = material.filter(m => m.name);
        values.characteristic = characteristic.filter(c => c);
        setData(values);
        classroomAPI.update({ data: values, params: { embed: 1 } }, { classroomId: getClassroom().id }).then(({ data }) => {
          setClassroom(data);
          Message.success('更新成功');
        }).catch(e => Dialog.alert({
          title: '保存失败',
          content: e.message,
        }));
      }
    });
  };

  render() {
    const { labelSpan, wrapperSpan } = this.props;
    const { thumb, material, characteristic } = this.state;

    return (
      <Form labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }} field={this.field}>
        <Form.Item label="专题名称：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input name="title" />
        </Form.Item>
        <Form.Item label="专题封面：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Upload onSuccess={({ response }) => this.setState({ thumb: response })} listType="card" action={IMAGE_UPLOAD_URL} limit={1}>
            {thumb && thumb.thumbnail ? <img src={thumb.thumbnail} alt="" width={300} height={180} className="m-r-10" /> : <img src="/static/images/coursesimg.png" alt="" width={300} height={180} className="m-r-10" />}
            <Button>上传图片</Button>
            <div className="text-muted fontsw m-t-10">请上传尺寸宽为300px，高为180px,大小不超过1M，图片格式为jpg，png为专题封面。</div>
          </Upload>
        </Form.Item>
        <Form.Item label="专题描述：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input.TextArea name="description" className="textareaheight180" rows="8" />
        </Form.Item>
        <Form.Item label="预备知识：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input.TextArea name="requirement" className="textareaheight180" rows="8" />
        </Form.Item>
        <Form.Item label="考核内容：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input.TextArea name="testPoint" className="textareaheight180" rows="8" />
        </Form.Item>
        <Form.Item label="参考资料：" requiredMessage="必填项不能为空" patternMessage="格式不正确">
          {material.concat({}).map((({ name, href }, i, self) => (
            <Row key={i} className={classnames({ 'm-t-10': i !== 0 })}>
              <Col span={11}>
                <Input trim value={name} onChange={e => this.modifyMaterial(i, { name: e })} style={{ width: '98%' }} placeholder="资料名称" />
              </Col>
              <Col span={11}>
                <Input trim value={href} onChange={e => this.modifyMaterial(i, { href: e })} style={{ width: '98%' }} placeholder="网址(选填)" />
              </Col>
              <Col>
                {i + 1 === self.length ? <Button onClick={() => this.addMaterial(i)}>+</Button> : <Button onClick={() => this.removeMaterial(i)}>-</Button>}
              </Col>
            </Row>
          )))}
        </Form.Item>
        <Form.Item label="专题特点：" requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input trim value={characteristic[0]} onChange={e => this.setCharacteristic(0, e)} placeholder="特点一(选填)" />
          <Input trim value={characteristic[1]} onChange={e => this.setCharacteristic(1, e)} className="m-t-10" placeholder="特点二(选填)" />
          <Input trim value={characteristic[2]} onChange={e => this.setCharacteristic(2, e)} className="m-t-10" placeholder="特点三(选填)" />
          <Input trim value={characteristic[3]} onChange={e => this.setCharacteristic(3, e)} className="m-t-10" placeholder="特点四(选填)" />
        </Form.Item>
        <Form.Item label="是否公开：" requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Radio.Group defaultValue={1} name="public" dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本专题的学生开放)', value: 0 }]} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
          <Form.Submit type="primary" onClick={this.onSubmit} className="serverbtn">保存</Form.Submit>
        </Form.Item>
      </Form>
    );
  }
}
