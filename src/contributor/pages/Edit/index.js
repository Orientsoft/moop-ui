import React, { useState } from 'react';
import Container from '@icedesign/container';
import Step1 from './components/Step1';

const steps = [
  { label: '编辑实验模版信息', render: props => <Step1 {...props} /> },
];

export default ({ dataSource, onBack }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Container title={steps[current].label}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: i === current ? 'block' : 'none' }}>
          {step.render({ setStep: setCurrent, dataSource, onBack })}
        </div>
      ))}
    </Container>
  );
};
