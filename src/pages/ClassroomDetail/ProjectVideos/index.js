import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default ({ data = [] }) => {
  return (
    <Row wrap>
      {data.length ? data.map((video, i) => (
        <Col key={i} span={12}>
          <video controls src={video} height="300" className="m-b-10" />
        </Col>
      )) : <p>暂无视频</p>}
    </Row>
  );
};
