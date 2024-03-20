import React, { useState } from 'react';

const SwatchSize = ({ item, setSize }) => {
  const [data, setData] = useState('None');
  if (!item.values.length) {
    return null;
  }
  return (
    <div className="option-root-20v border-b border-solid border-subtle mx-sm my-0 px-0 py-sm">
      <span className="option-title-2h- block font-semibold leading-normal mb-sm text-colorDefault">{item.label}</span>
      <div className="tileList-root-1_v gap-xs grid grid-flow-col">
        {item.values.map(opt => (
          <button
            key={`${opt.uid}-${opt.value_index}`}
            onClick={() => {
              setSize(opt);
              setData(opt.label);
            }}
            className={`${data === opt.label ? 'tile-root_selected-328 bg-gray-900 text-white' : ''} tile-root-1f- clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm`}
            title={opt.label}
            type="button"
            aria-label={`${item.label} ${opt.label}`}>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
      <dl className="option-selection-Mcv flex leading-normal mt-xs text-colorDefault">
        <dt className="option-selectionLabel-1Xq mr-xs">Selected {item.label}:</dt>
        <dd>{data}</dd>
      </dl>
    </div>
  );
};

export default SwatchSize;
