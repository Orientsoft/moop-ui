import React, { Component } from 'react';
import { Form, Input, Field, Grid, Button, TreeSelect, Message, Select } from '@alifd/next';
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

    const {
      title,
      description,
      requirement,
      timeConsume,
      material,
      reference,
      tag,
      spec,
    } = props.dataSource;

    this.field = new Field(this, {
      values: {
        title,
        description,
        requirement,
        timeConsume: parseFloat(timeConsume) || 0,
        material,
        reference,
        tag: tag.id,
        spec,
      },
    });
    this.state = {
      tags: [],
      images: [],
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
        images: data.map((image) => {
          if (this.props.dataSource && image.url === this.props.dataSource.image) {
            this.field.setValue('image', image.id);
          }
          return {
            value: image.id,
            label: image.desc,
            package: image.package,
          };
        }),
      });
    });
  }

  renderImage = image => <div>{image.label}<span style={{ float: 'right', fontSize: 14, color: 'grey' }}>{image.package.length ? image.package.join('，') : '空'}</span></div>;

  onSubmit = (values, error) => {
    if (!error && this.props.dataSource) {
      contributor.update({ data: values }, { projectId: this.props.dataSource.id }).then(() => {
        Message.success('更新实验成功');
        this.props.onBack();
      });
    }
  };

  onUploadSuccess = (image) => {
    this.props.setTenant({ logo: [image.id] });
  };

  render() {
    const { tags, images } = this.state;

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
        </FormItem>
        <FormItem label="实验标签：" required requiredMessage="实验标签不能为空">
          <TreeSelect name="tag" style={{ width: '100%' }} dataSource={tags} />
        </FormItem>
        <FormItem label="Github地址：" format="url" pattern={/\.git$/i} patternMessage="无效的Github地址" formatMessage="无效的Github地址" required requiredMessage="Github地址不能为空">
          <Input name="spec" placeholder="示例：https://example.com/demo.git" />
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Col offset={6}>
            <Form.Submit validate type="primary" onClick={this.onSubmit}>更新实验</Form.Submit>
            <Button style={{ marginLeft: 15 }} onClick={this.props.onBack}>返回实验列表</Button>
          </Col>
        </FormItem>
      </Form>
    );
  }
}
