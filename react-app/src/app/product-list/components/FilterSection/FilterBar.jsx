import React from 'react';
import FilterList from './FilterList';
import SelectedFilter from './SelectedFilter';
import { useStoreContext } from '../../../../library/context/store/StoreContext';

const FilterBar = () => {
  const {
    state: { uid, selectedFilter },
  } = useStoreContext();
  return (
    <aside
      className="filterSidebar-root-3TH bg-white bottom-0 hidden max-w-modal w-full z-foreground lg_grid"
      aria-busy="false">
      <div className="filterSidebar-body-3wX overflow-auto">
        <div className="filterSidebar-header-17v flex justify-between pb-0 pt-5 px-5">
          <h2 className="filterSidebar-headerTitle--Ot flex items-center leading-none text-lg">Filters</h2>
        </div>
        {/* selected filter */}
        {selectedFilter.length > 0 && (
          <ul className="currentFilters-root-2-V px-xs py-0 overflow-auto" aria-label="Current Filters">
            {selectedFilter.map(item => (
              <SelectedFilter key={`selected-${item.key}-${item.value}`} item={item} />
            ))}
          </ul>
        )}

        {/* clear */}
        <div className="filterSidebar-action-cBm pb-0 pt-xs px-xs">
          <button
            className="linkButton-root-1df clickable-root-1HB cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center font-semibold leading-tight max-w-full text-colorDefault text-brand-dark underline hover_text-colorDefault"
            type="button">
            <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
              Clear all
            </span>
          </button>
        </div>

        {/* Filters */}
        {uid && <FilterList uid={uid} />}
      </div>
    </aside>
  );
};

export default FilterBar;
