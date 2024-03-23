import React from 'react';
import EditIcon from '../../../../library/icons/EditIcon';
import BinIcon from '../../../../library/icons/BinIcon';
import FavIcon from '../../../../library/icons/FavIcon';

const MoreOptions = () => {
  return (
    <ul aria-hidden="true" className="kebab-dropdown-8k8 absolute bg-body grid items-center right-5 top-0 z-dropdown">
      <li className="section-menuItem-8oh bg-white block border-b border-solid border-subtle w-full hover_bg-gray-300">
        <button
          className="section-button-Fe9 flex gap-x-2.5 items-center justify-items-start p-2xs pb-3 pr-sm text-left w-full whitespace-pre"
          type="button"
          aria-label="Edit item">
          <EditIcon />
          <span className="product-sectionText-35W pointer-events-none px-2xs py-1 text-sm">Edit item</span>
        </button>
      </li>
      <li className="section-menuItem-8oh bg-white block border-b border-solid border-subtle w-full hover_bg-gray-300">
        <button
          className="section-button-Fe9 flex gap-x-2.5 items-center justify-items-start p-2xs pb-3 pr-sm text-left w-full whitespace-pre"
          type="button"
          aria-label="Remove from cart">
          <BinIcon />
          <span className="product-sectionText-35W pointer-events-none px-2xs py-1 text-sm">Remove from cart</span>
        </button>
      </li>
      <li>
        <button
          className="product-addToListButton-2dE content-center gap-x-xs inline-flex px-2.5 py-3.5 text-sm w-full"
          type="button"
          aria-label="Add to Favorites">
          <FavIcon /> Save for later
        </button>
      </li>
    </ul>
  );
};

export default MoreOptions;
