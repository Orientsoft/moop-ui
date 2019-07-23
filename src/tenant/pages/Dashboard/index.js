/* eslint camelcase: 0 */
import React, { Fragment, Component } from 'react';
import { Grid } from '@alifd/next';
import Container from '@icedesign/container';
import Table from './components/Table';
import Card from './components/Card';
import Chart from './components/Chart';
import { dashboard } from '../../api';

const { Row, Col } = Grid;

export default class Dashboard extends Component {
  state = {
    student: 0,
    teacher: 0,
    teaching_classroom: 0,
    total_classroom: 0,
    cpu: '89%',
    memory: '72%',
    disk: '30%',
    containers: 129,
  };

  componentDidMount() {
    dashboard.count().then(({ data }) => {
      this.setState(data);
    });
  }

  render() {
    const { student, teacher, teaching_classroom, total_classroom, cpu, memory, disk, containers } = this.state;

    return (
      <Fragment>
        <div style={{ marginBottom: 15, fontWeight: 'bold' }}>数据统计</div>
        <Row gutter={20}>
          <Col span={6}>
            <Card.Cyan value={student} label="注册学生用户数" />
          </Col>
          <Col span={6}>
            <Card.Purple value={teacher} label="注册教师用户数" />
          </Col>
          <Col span={6}>
            <Card.Blue value={teaching_classroom} label="正在教学的专题数" />
          </Col>
          <Col span={6}>
            <Card.Orange value={total_classroom} label="总的专题数" />
          </Col>
        </Row>
        <div style={{ marginTop: 25, marginBottom: 15, fontWeight: 'bold' }}>实时计数</div>
        <Row gutter={20}>
          <Col span={6}>
            <Chart.Green value={cpu} label="CPU占用率" />
          </Col>
          <Col span={6}>
            <Chart.Orange value={memory} label="内存占用率" />
          </Col>
          <Col span={6}>
            <Chart.Red value={disk} label="存储占用率" />
          </Col>
          <Col span={6}>
            <Chart.Blue value={containers} label="正在运行的容器数量" />
          </Col>
        </Row>
        <div style={{ marginTop: 25, marginBottom: 15, fontWeight: 'bold' }}>实验列表</div>
        <Container>
          <Table />
        </Container>
      </Fragment>
    );
  }
}
