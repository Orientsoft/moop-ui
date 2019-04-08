import React, { Fragment, Children, useEffect, useState } from 'react';
import classnames from 'classnames';
import get from 'lodash-es/get';
import isBoolean from 'lodash-es/isBoolean';
import isFunction from 'lodash-es/isFunction';

const Tab = ({ children, activeKey = 0, onChange }) => {
  const [active, setActive] = useState(activeKey);
  const onClick = (key) => {
    let shouldSwitch = true;

    if (isFunction(onChange)) {
      const status = onChange(key, active);

      if (isBoolean(status)) {
        shouldSwitch = status;
      }
    }
    if (shouldSwitch) {
      setActive(key);
    }
  };

  useEffect(() => {
    setActive(activeKey);
  }, [activeKey]);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="container m-t-20">
          <ul className="nav nav-pills nav-fill">
            {Children.map(children, (item, i) => item && (
              <li key={i} className="nav-item">
                <a className={classnames('nav-link', { active: active === i })} onClick={() => onClick(i)}>{item.props.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {get(children, active, null)}
    </Fragment>
  );
};

Tab.Item = ({ title, children, ...itemProps }) => <div title={title} {...itemProps}>{children}</div>;

export default Tab;
