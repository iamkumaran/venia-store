import React from 'react';
import FilterBar from './FilterSection/FilterBar';
import ListWrapper from './List/ListWrapper';
import TotalCount from './List/TotalCount';
import { useStoreContext } from '../../../library/context/store/StoreContext';

const Component = () => {
  const {
    state: { categoryName },
  } = useStoreContext();
  return (
    <article className="category-root-2h5 p-xs">
      <div>
        <h1 aria-live="polite" className="category-title-2c9 font-normal px-2xs py-0 text-xl">
          <div className="category-categoryTitle-q7I font-light leading-snug pb-xs text-colorDefault text-center text-xl">
            {categoryName}
          </div>
        </h1>
      </div>
      <div className="category-contentWrapper-34q w-full lg_flex">
        <div className="category-sidebar-21s hidden lg_flex lg_self-start lg_pt-16 lg_w-filterSidebarWidth">
          <FilterBar />
        </div>
        <div className="category-categoryContent-1jb lg_flex-grow">
          <div className="category-heading-XE8 flex flex-wrap justify-center pb-2xs lg_flex-nowrap lg_items-center lg_justify-between lg_pb-sm lg_w-full">
            <TotalCount />
            <div className="category-headerButtons-1JJ flex justify-center pb-sm lg_justify-end lg_pb-0">
              <button
                className="filterModalOpenButton-filterButton-3kT button-root_lowPriority-3lq button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-gray-700 text-gray-700 active_border-gray-800 active_text-gray-800 hover_border-gray-800 hover_text-gray-800 min-w-[6.25rem] lg_hidden"
                type="button"
                aria-label="Filter Button for Filter Options."
                aria-live="polite"
                aria-busy="false">
                <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                  Filter
                </span>
              </button>
              <div className="productSort-root-3hp relative ml-2xs" aria-busy="false">
                <button
                  className="productSort-sortButton-1Ii button-root_lowPriority-3lq button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-gray-700 text-gray-700 active_border-gray-800 active_text-gray-800 hover_border-gray-800 hover_text-gray-800 min-w-[6.26rem] lg_border-2 lg_border-gray-500 lg_font-normal lg_normal-case lg_rounded-md"
                  type="button"
                  aria-label="Sort Button Collapsed">
                  <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                    <span className="productSort-mobileText-3n_ lg_hidden">Sort</span>
                    <span className="productSort-desktopText-3QH hidden lg_inline-flex">
                      <span className="productSort-sortText-3y1 leading-normal text-colorDefault">
                        Sort by&nbsp;Position
                      </span>
                      <span className="productSort-desktopIconWrapper-1m8 icon-root-2x9 items-center inline-flex justify-center">
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
                          className="productSort-desktopIcon-2Vg icon-icon-_rq stroke-gray-500">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="sortedByContainer-root-vyI pb-xs text-center text-sm lg_hidden" aria-busy="true">
              Items sorted by
              <span className="sortedByContainer-sortText-wLM font-semibold">Position</span>
            </div>
          </div>
          <section>
            <div className="gallery-root-1o3 grid grid-cols-1 leading-none" aria-busy="false">
              <ListWrapper />
            </div>
          </section>
          <div className="category-pagination-1Ui relative bottom-0" />
        </div>
      </div>
    </article>
  );
};

export default Component;
