import React from 'react';
import CrossIcon from '../../../../library/icons/CrossIcon';

const SelectedFilter = ({ item }) => {
  const removeHandler = () => {
    // console.log(`checkbox target`, `check-${item.key}-${item.value}`);
    // console.log('elem', document.getElementById(`check-${item.key}-${item.value}`));
    document.getElementById(`check-${item.key}-${item.value}`)?.click();
  };
  return (
    <li className="currentFilters-item-K3D float-left pb-0 pl-0 pr-xs pt-xs">
      <span className="currentFilter-root-2kn bg-gray-700 font-semibold gap-2xs grid-flow-col inline-grid items-center justify-center pl-2 pr-3 py-2.5 rounded-md text-white">
        <button
          onClick={removeHandler}
          className="trigger-root-1mc clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center"
          type="button"
          aria-hidden="false"
          aria-label={`Clear filter "${item.label}"`}>
          <span className="icon-root-2x9 items-center inline-flex justify-center">
            <CrossIcon />
          </span>
        </button>
        <span>{item.label}</span>
      </span>
    </li>
  );
};

export default SelectedFilter;
