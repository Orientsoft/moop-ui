import React from 'react';
import { Chart as LineChart, Axis, Geom } from 'bizcharts';

const Chart = ({ x = 'year', y = 'value', value, label, background, dataSource = [] }) => (
  <div style={{ position: 'relative', marginTop: 10, height: 180, background: 'white', borderRadius: 4 }}>
    <div style={{ position: 'absolute', top: -10, left: 10, right: 10, height: 140, borderRadius: 4, boxShadow: '0 4px 8px rgba(0,0,0,.15)', background }}>
      <LineChart height={140} padding={[10, 15, 45, 40]} data={dataSource} forceFit>
        <Axis name={x} label={{ textStyle: { fill: 'rgba(255,255,255,.55)' } }} tickLine={null} line={{ stroke: 'rgba(255,255,255,.15)' }} grid={{ lineStyle: { stroke: 'rgba(255,255,255,.15)' } }} />
        <Axis name={y} label={{ textStyle: { fill: 'rgba(255,255,255,.55)' } }} grid={{ lineStyle: { stroke: 'rgba(255,255,255,.15)' } }} />
        <Geom style={{ stroke: 'white' }} type="line" position="year*value" size={2} />
      </LineChart>
    </div>
    <div style={{ position: 'absolute', left: 15, right: 15, bottom: 10 }}>
      <span style={{ color: '#666' }}>{label}</span>
      <span style={{ float: 'right', fontSize: 18, fontWeight: 'bold' }}>{value}</span>
    </div>
  </div>
);

Chart.Green = props => <Chart background="linear-gradient(to right, #60b86e, #43a155)" {...props} />;
Chart.Red = props => <Chart background="linear-gradient(to right, #f14e4f, #e83a39)" {...props} />;
Chart.Blue = props => <Chart background="linear-gradient(to right, #43a7e0, #0097ee)" {...props} />;
Chart.Orange = props => <Chart background="linear-gradient(to right, #ffa33b, #fe8c29)" {...props} />;

export default Chart;