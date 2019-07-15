import React, { Fragment, Component } from 'react';
import { Form, Input, Field, Grid, TreeSelect, Message, Select, Radio } from '@alifd/next';
import { contributor } from '../../../api';

const { Item: FormItem } = Form;
const { Col } = Grid;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.field = new Field(this);
    this.state = {
      tags: [],
      images: [],
      posting: false,
    };
  }

  componentDidMount() {
    contributor.selectTags().then(({ data }) => {
      this.setState({
        tags: data.map(({ id, category, type }) => ({
          label: category,
          value: id,
          selectable: false,
          children: type.map(tag => ({ value: tag.id, label: tag.name })),
        })),
      });
    });
    contributor.selectImages().then(({ data }) => {
      this.setState({
        images: data.map(image => ({
          value: image.id,
          label: image.desc,
          package: image.package,
        })),
      });
    });
  }

  renderImage = image => <div>{image.label}<span style={{ float: 'right', fontSize: 14, color: 'grey' }}>{image.package.length ? image.package.join('，') : '空'}</span></div>;

  onSubmit = (values, error) => {
    if (!error) {
      this.setState({ posting: true });
      contributor.create({ data: values }).then(() => {
        Message.success('创建实验成功');
        this.setState({ posting: false });
        this.field.reset();
      }).catch(() => this.setState({ posting: false }));
    }
  };

  onUploadSuccess = (image) => {
    this.props.setTenant({ logo: [image.id] });
  };

  render() {
    const { tags, images, posting } = this.state;
    const display = this.field.getValue('private') ? '' : 'none';

    return (
      <Form {...formItemLayout} field={this.field}>
        <FormItem label="实验标题：" required requiredMessage="实验标题不能为空">
          <Input name="title" />
        </FormItem>
        <FormItem label="实验描述：" required requiredMessage="实验描述不能为空">
          <Input.TextArea name="description" />
        </FormItem>
        <FormItem label="实验要求：" required requiredMessage="实验要求不能为空">
          <Input name="requirement" />
        </FormItem>
        <FormItem label="预计时间：" required requiredMessage="预计时间不能为空">
          <Input name="timeConsume" htmlType="number" placeholder="学时" />
        </FormItem>
        <FormItem label="实验材料：">
          <Input.TextArea name="material" />
        </FormItem>
        <FormItem label="参考资料：">
          <Input.TextArea name="reference" />
        </FormItem>
        <FormItem label="镜像：" required requiredMessage="镜像不能为空">
          <Select name="image" style={{ width: '100%' }} dataSource={images} itemRender={this.renderImage} />
          <span className="fs12 corol6">没有找到合适的实验环境？请联系邮箱：support@mooplab.com</span>
        </FormItem>
        <FormItem label="实验标签：" required requiredMessage="实验标签不能为空">
          <TreeSelect name="tag" style={{ width: '100%' }} dataSource={tags} />
        </FormItem>
        <FormItem label="Github地址：" format="url" pattern={/\.git$/i} patternMessage="无效的Github地址" formatMessage="无效的Github地址" required requiredMessage="Github地址不能为空">
          <Input name="spec" placeholder="示例：https://example.com/demo.git" />
        </FormItem>
        <FormItem label="私有项目：">
          <Radio.Group name="private" defaultValue={0}>
            <Radio value={1}>是</Radio>
            <Radio value={0}>否</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem label="账号：" style={{ display }} required={!display} requiredMessage="账号不能为空">
          <Input name="username" />
        </FormItem>
        <FormItem label="密码：" style={{ display }} required={!display} requiredMessage="密码不能为空">
          <Input name="password" htmlType="password" />
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Col offset={6}>
            <Form.Submit validate type="primary" disabled={posting} onClick={this.onSubmit}>创建实验</Form.Submit>
          </Col>
        </FormItem>
      </Form>
    );
  }
}
