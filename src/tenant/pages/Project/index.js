import React from 'react';
import { Grid } from '@alifd/next';
import TotalChart from './components/TotalChart';
import TimeChart from './components/TimeChart';
import ScoreChart from './components/ScoreChart';

const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <TotalChart />
      <Row gutter={20}>
        <Col span={16}>
          <TimeChart />
        </Col>
        <Col span={8}>
          <ScoreChart />
        </Col>
      </Row>
    </div>
  );
};
