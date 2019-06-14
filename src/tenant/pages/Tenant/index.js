import React, { Fragment, useState, useEffect } from 'react';
import { Step } from '@alifd/next';
import Container from '@icedesign/container';
import merge from 'lodash-es/merge';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { tenant as tenantAPI } from '../../api';

const TENANT_KEY = 'MOOP_TENANT';
const { Item } = Step;

const steps = [
  { label: '填写基本信息', render: props => <Step1 {...props} /> },
  { label: '宣传资料', render: props => <Step2 {...props} /> },
  { label: '学校广告语', render: props => <Step3 {...props} /> },
  { label: '确认提交', render: props => <Step4 {...props} /> },
];

export default () => {
  const [current, setCurrent] = useState(0);
  const [value, setValue] = useState(null);
  const getTenant = () => {
    let tenant = sessionStorage.getItem(TENANT_KEY);
    try {
      tenant = JSON.parse(tenant);
    } catch (error) {
      tenant = null;
    }
    return tenant;
  };
  const setTenant = data => sessionStorage.setItem(TENANT_KEY, JSON.stringify(merge(getTenant(), data)));
  const removeTenant = () => sessionStorage.removeItem(TENANT_KEY);

  useEffect(() => {
    tenantAPI.select().then(({ data }) => setValue(data));
    return removeTenant;
  }, []);

  return (
    <Fragment>
      <Container>
        <Step current={current} >
          {steps.map((step, i) => <Item key={i} title={step.label} onClick={n => setCurrent(n)} />)}
        </Step>
      </Container>
      <Container title={steps[current].label}>
        {value && steps.map((step, i) => (
          <div key={i} style={{ display: i === current ? 'block' : 'none' }}>
            {step.render({ value, setTenant, getTenant, removeTenant, setStep: setCurrent })}
          </div>
        ))}
      </Container>
    </Fragment>
  );
};
