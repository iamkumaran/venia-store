import React, { useState } from 'react';
import { useStoreContext } from '../../../../library/context/store/StoreContext';
import { setSelectedFilters } from '../../../../library/context/store/actions';
import CheckBoxIcon from '../../../../library/icons/CheckBoxIcon';

const FilterItem = ({ item, opt }) => {
  const { dispatch } = useStoreContext();
  const [isSelected, setSelected] = useState(false);

  // CAREFULL: same handler used on <SelectedFilter> component thru native JavaScript.
  const handleChange = e => {
    setSelected(e.target.checked);
    dispatch(
      setSelectedFilters(
        { key: item.attribute_code, value: opt.value, label: opt.label, group: item.label },
        e.target.checked
      )
    );
  };

  return (
    <li key={`${item.attribute_code}-${opt.value}`}>
      <label
        aria-label={`Remove filter "${opt.label}".`}
        className="checkbox-root-1vJ gap-3 grid grid-flow-col items-center justify-items-center leading-normal text-colorDefault">
        <input
          type="checkbox"
          title={opt.label}
          className="checkbox-input-33X appearance-none bg-transparent border-2 border-solid border-transparent cursor-pointer h-[1.5rem] rounded w-[1.5rem] disabled_cursor-not-allowed"
          id={`check-${item.attribute_code}-${opt.value}`}
          name={`${opt.attribute_code}-${opt.value}`}
          defaultValue={opt.value}
          onChange={handleChange}
        />
        <CheckBoxIcon isSelected={isSelected} />
        <span className="checkbox-label-1cy cursor-pointer justify-self-start text-colorDefault">{opt.label}</span>
      </label>
      <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
    </li>
  );
};

export default FilterItem;
