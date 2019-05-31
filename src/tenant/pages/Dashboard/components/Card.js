import React from 'react';
import FoundationSymbol from '@icedesign/foundation-symbol';

const Card = ({ value, icon, label, background }) => (
  <div style={{ display: 'inline-block', width: '100%', height: 70, color: 'white', background, borderRadius: 4 }}>
    <div style={{ float: 'left', width: 70, height: 70, textAlign: 'center', backgroundColor: 'rgba(0,0,0,.15)' }}>
      {icon}
    </div>
    <div style={{ marginLeft: 100, marginTop: 10 }}>
      <div style={{ fontSize: 20, fontWeight: 'bold' }}>{value}</div>
      <div style={{ fontSize: 13 }}>{label}</div>
    </div>
  </div>
);

Card.Cyan = props => <Card background="#44e3c3" icon={<FoundationSymbol size="xl" style={{ marginTop: 18 }} type="person" />} {...props} />;
Card.Purple = props => <Card background="#a674f9" icon={<FoundationSymbol size="xl" style={{ marginTop: 18 }} type="fans" />} {...props} />;
Card.Blue = props => <Card background="#0098ee" icon={<FoundationSymbol size="xl" style={{ marginTop: 18 }} type="chart" />} {...props} />;
Card.Orange = props => <Card background="#fed348" icon={<FoundationSymbol size="xl" style={{ marginTop: 18 }} type="skin_light" />} {...props} />;

export default Card;
