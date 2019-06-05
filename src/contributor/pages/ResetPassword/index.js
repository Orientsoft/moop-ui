import React, { useState } from 'react';
import Container from '@icedesign/container';
import Step1 from './components/Step1';

const steps = [
  { label: '修改密码', render: props => <Step1 {...props} /> },
];

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <Container title={steps[current].label}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: i === current ? 'block' : 'none' }}>
          {step.render({ setStep: setCurrent })}
        </div>
      ))}
    </Container>
  );
};
