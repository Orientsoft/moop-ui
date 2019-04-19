import React from 'react';
import { Form, Field, Grid, Input, Button, Upload, Radio } from '@alifd/next';
import classnames from 'classnames';
import { IMAGE_UPLOAD_URL } from '@/utils/api';

const { Row, Col } = Grid;

export default class Step1 extends React.Component {
  state = { thumb: null, material: [], characteristic: [] };

  field = new Field(this);

  componentDidMount() {
    this.field.setValues(this.props.getData());
  }

  static getDerivedStateFromProps(nextProps) {
    const values = nextProps.getData();

    if (values) {
      return {
        thumb: { id: values.thumb },
        material: values.material,
        characteristic: values.characteristic,
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
    const { toNext, setData } = this.props;
    const { thumb, material, characteristic } = this.state;

    this.field.validate((error, values) => {
      if (!error) {
        if (thumb) {
          values.thumb = thumb.id;
        }
        values.material = material.filter(m => m.name);
        values.characteristic = characteristic.filter(c => c);
        setData(values);
        toNext();
      }
    });
  };

  render() {
    const { labelSpan, wrapperSpan } = this.props;
    const { thumb, material, characteristic } = this.state;

    return (
      <Form labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }} field={this.field}>
        <Form.Item label="专题名称" required>
          <Input name="title" />
        </Form.Item>
        <Form.Item label="专题封面">
          <Upload onSuccess={({ response }) => this.setState({ thumb: response })} listType="card" action={IMAGE_UPLOAD_URL} limit={1}>
            <Button>上传图片</Button>
            {thumb ? <img src={thumb.url} alt="" width={64} height={64} /> : null}
          </Upload>
        </Form.Item>
        <Form.Item label="专题描述" required>
          <Input.TextArea name="description" />
        </Form.Item>
        <Form.Item label="预备知识" required>
          <Input.TextArea name="requirement" />
        </Form.Item>
        <Form.Item label="考核内容" required>
          <Input.TextArea name="testPoint" />
        </Form.Item>
        <Form.Item label="参考资料">
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
        <Form.Item label="专题特点">
          <Input trim value={characteristic[0]} onChange={e => this.setCharacteristic(0, e)} placeholder="特点一(选填)" />
          <Input trim value={characteristic[1]} onChange={e => this.setCharacteristic(1, e)} className="m-t-10" placeholder="特点二(选填)" />
          <Input trim value={characteristic[2]} onChange={e => this.setCharacteristic(2, e)} className="m-t-10" placeholder="特点三(选填)" />
          <Input trim value={characteristic[3]} onChange={e => this.setCharacteristic(3, e)} className="m-t-10" placeholder="特点四(选填)" />
        </Form.Item>
        <Form.Item label="是否公开">
          <Radio.Group defaultValue={1} name="public" dataSource={[{ label: '公开(对所有学生开放)', value: 1 }, { label: '私有(只对本专题的学生开放)', value: 0 }]} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
          <Form.Submit type="primary" style={{ width: '100%' }} onClick={this.onSubmit}>下一步</Form.Submit>
        </Form.Item>
      </Form>
    );
  }
}
