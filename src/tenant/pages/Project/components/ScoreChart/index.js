import React from 'react';
import Container from '@icedesign/container';
import { Chart, Axis, Geom, Coord, Label } from 'bizcharts';

const data = [
  {
    item: 'A+',
    count: 40,
  },
  {
    item: 'A',
    count: 21,
  },
  {
    item: 'B',
    count: 17,
  },
  {
    item: 'C',
    count: 13,
  },
  {
    item: 'D',
    count: 9,
  },
];

export default () => {
  return (
    <Container title="学习分数分布">
      <Chart padding={[40, 40, 40, 40]} height={300} data={data} forceFit>
        <Coord type="theta" />
        <Axis name="count" />
        <Geom type="intervalStack" position="count" color="item" >
          <Label content="count" formatter={(value, item) => `${item.point.item}: ${value}人`} />
        </Geom>
      </Chart>
    </Container>
  );
};
