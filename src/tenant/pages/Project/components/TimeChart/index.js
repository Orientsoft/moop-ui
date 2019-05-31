import React from 'react';
import Container from '@icedesign/container';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

const data = [
  {
    month: '1月',
    duration: 38,
  },
  {
    month: '2月',
    duration: 52,
  },
  {
    month: '3月',
    duration: 61,
  },
  {
    month: '4月',
    duration: 145,
  },
  {
    month: '5月',
    duration: 48,
  },
  {
    month: '6月',
    duration: 38,
  },
  {
    month: '7月',
    duration: 38,
  },
  {
    month: '8月',
    duration: 38,
  },
];

export default () => {
  return (
    <Container title="学习时长分布">
      <Chart padding={[40, 40, 40, 40]} height={300} data={data} scale={{ duration: { alias: '时长' } }} forceFit>
        <Axis name="month" />
        <Axis name="duration" title />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="interval" position="month*duration" />
      </Chart>
    </Container>
  );
};
