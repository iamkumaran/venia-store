import React from 'react';

const StepperIcon = ({ type }) => {
  return (
    <span className="quantityStepper-icon-1_J items-center inline-flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-icon-_rq">
        {type === '+' && <line x1={12} y1={5} x2={12} y2={19} />}
        <line x1={5} y1={12} x2={19} y2={12} />
      </svg>
    </span>
  );
};

export default StepperIcon;
