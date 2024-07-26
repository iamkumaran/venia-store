import React, { useState } from 'react';
import FilterItem from './FilterItem';

const FilterListSub = ({ item }) => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <li
      className="filterBlock-root-Jl- border-solid border-subtle border-t-2 border-r-0 border-b-0 border-l-0 grid"
      aria-label={`Filter products by "${item.label}"`}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'show' : 'Hide'} "${item.label}" filter item options.`}
        onClick={e => {
          setExpanded(e.currentTarget.getAttribute('aria-expanded') !== 'true');
        }}>
        <span className="filterBlock-header-Y0o grid grid-cols-autoLast grid-flow-col items-center min-h-[3.125rem]">
          <span className="filterBlock-name-2Pb leading-normal text-left">{item.label}</span>
          <span className="icon-root-2x9 items-center inline-flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-icon-_rq">
              <polyline points={isExpanded ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
            </svg>
          </span>
        </span>
      </button>
      {isExpanded && (
        <form className="filterBlock-list-2fc">
          <ul className="filterList-items-3pK gap-3 grid -ml-1.5 pb-md">
            {item.options.map(opt => (
              <FilterItem key={`${item.attribute_code}-${opt.value}`} item={item} opt={opt} />
            ))}

            {/* <li className="filterList-showMoreLessItem-27u pl-1">
                <button className="filterList-showMoreLessButton-1fn text-sm underline hover_no-underline">
                  Show More
                </button>
              </li> */}
          </ul>
        </form>
      )}
    </li>
  );
};

export default FilterListSub;
