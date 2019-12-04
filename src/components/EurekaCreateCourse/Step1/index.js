import React from 'react';
import { Form, Field, Grid, Input, Button, Upload, Radio } from '@alifd/next';
import classnames from 'classnames';
import BraftEditor from 'braft-editor';
import { IMAGE_UPLOAD_URL } from '@/utils/api';

const { Row, Col } = Grid;

export default class Step1 extends React.Component {
  state = { thumb: null, material: [], characteristic: [] };

  field = new Field(this);

  componentDidMount() {
    this.field.setValues(this.props.getData());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const values = nextProps.getData();

    if (values) {
      return {
        thumb: prevState.thumb || { id: values.thumb },
        material: prevState.material.length ? prevState.material : values.material,
        characteristic: prevState.characteristic.length ? prevState.characteristic : values.characteristic,
      };
    }
    return null;
  }

  addMaterial = () => {
    this.setState({ material: [...this.state.material, {}] });
  };

  removeMaterial = (index) => {
    const { material } = this.state;

    material.splice(index, 1);
    this.setState({ material: [...material] });
  };

  modifyMaterial = (index, value) => {
    const { material } = this.state;

    material[index] = { ...material[index], ...value };
    this.setState({ material: [...material] });
  };

  setCharacteristic = (index, value) => {
    const { characteristic } = this.state;

    characteristic[index] = value;
    this.setState({ characteristic: [...characteristic] });
  };

  onSubmit = () => {
    const { toNext, setData } = this.props;
    const { thumb, material, characteristic } = this.state;

    this.field.validate((error, values) => {
      if (!error) {
        if (thumb) {
          values.thumb = thumb.id;
        }
        values.description = values.description.toHTML();
        values.requirement = values.requirement.toHTML();
        values.testPoint = values.testPoint.toHTML();
        values.material = material.filter(m => m.name).map((m) => {
          if (!/^([a-zA-Z]+):\/\//.test(m.href)) {
            m.href = `http://${m.href}`;
          }
          return m;
        });
        values.characteristic = characteristic.filter(c => c);
        setData(values);
        toNext();
      }
    });
  };

  validator = (rule, value) => new Promise((resolve, reject) => {
    if (value.toText().trim().length > 0) {
      resolve();
    } else {
      reject(new Error('必填项不能为空'));
    }
  });

  render() {
    const { labelSpan, wrapperSpan, getData } = this.props;
    const { thumb, material, characteristic } = this.state;
    const data = getData();
    const disabled = { limit: false, isPublic: false };

    if (data && 'status' in data && data.status !== 0) {
      disabled.limit = true;
      disabled.isPublic = true;
    }

    return (
      <Form labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }} field={this.field}>
        <Form.Item label="课题名称：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input name="title" />
        </Form.Item>
        <Form.Item label="课题封面：" className="coursesimg" requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Upload onSuccess={({ response }) => this.setState({ thumb: response })} listType="card" action={IMAGE_UPLOAD_URL} limit={1} >
            {thumb && thumb.url ? <img src={thumb.url} alt="" width={300} height={180} className="m-r-10" /> : <img src="/images/coursesimg.png" alt="" width={300} height={180} className="m-r-10" />}
            <Button>上传图片</Button>
            <div className="text-muted fontsw m-t-10">请上传尺寸宽为300px，高为180px,大小不超过1M，图片格式为jpg，png为课题封面。</div>
          </Upload>
        </Form.Item>
        <Form.Item label="课题描述：" autoValidate={false} validator={this.validator} required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <BraftEditor name="description" defaultValue={BraftEditor.createEditorState(data ? data.description : '')} style={{ border: '1px solid #C4C6CF' }} contentStyle={{ height: 320 }} />
        </Form.Item>
        <Form.Item label="预备知识：" autoValidate={false} validator={this.validator} required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <BraftEditor name="requirement" defaultValue={BraftEditor.createEditorState(data ? data.requirement : '')} style={{ border: '1px solid #C4C6CF' }} contentStyle={{ height: 320 }} />
        </Form.Item>
        <Form.Item label="考核内容：" autoValidate={false} validator={this.validator} required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <BraftEditor name="testPoint" defaultValue={BraftEditor.createEditorState(data ? data.testPoint : '')} style={{ border: '1px solid #C4C6CF' }} contentStyle={{ height: 320 }} />
        </Form.Item>
        <Form.Item label="参考资料：" requiredMessage="必填项不能为空" patternMessage="格式不正确">
          {material.concat({}).map((({ name = '', href = '' }, i, self) => (
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
        <Form.Item label="课题特点：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Input trim value={characteristic[0]} onChange={e => this.setCharacteristic(0, e)} placeholder="特点一(选填)" />
          <Input trim value={characteristic[1]} onChange={e => this.setCharacteristic(1, e)} className="m-t-10" placeholder="特点二(选填)" />
          <Input trim value={characteristic[2]} onChange={e => this.setCharacteristic(2, e)} className="m-t-10" placeholder="特点三(选填)" />
          <Input trim value={characteristic[3]} onChange={e => this.setCharacteristic(3, e)} className="m-t-10" placeholder="特点四(选填)" />
        </Form.Item>
        <Form.Item label="课题人数限制：" required requiredMessage="必填项不能为空">
          <Input disabled={disabled.limit} defaultValue={50} htmlType="number" name="limit" placeholder="例如：50" />
        </Form.Item>
        <Form.Item label="是否公开：" required requiredMessage="必填项不能为空" patternMessage="格式不正确">
          <Radio.Group disabled={disabled.isPublic} defaultValue={1} name="public" dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本课题的学生开放)', value: 0 }]} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
          <Form.Submit type="primary" onClick={this.onSubmit} className="serverbtn"> 下一步</Form.Submit>
        </Form.Item>
      </Form>
    );
  }
}
