import React, { useEffect, useState } from 'react';
import BinIcon from '../../../../library/icons/BinIcon';
import { getUniqueID } from '../../../../utils/helper';
import KebabMenuIcon from '../../../../library/icons/KebabMenuIcon';

const MoreOptions = ({ removeItem }) => {
  const [isClicked, setIsClicked] = useState(false);
  const elemId = `more-${getUniqueID()}`;

  // handler to close the kebab menu outside.
  const bodyHandler = e => {
    // console.log(e.target.getAttribute('id'), '==', elemId);
    if (e.target.getAttribute('id') !== elemId) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    // delay to give time for other components to render.
    setTimeout(() => document.body.addEventListener('click', bodyHandler, { once: true }), 100);
    return () => document.body.removeEventListener('click', bodyHandler);
  }, [isClicked]);

  return (
    <div className="product-kebab-3dI relative">
      <button
        onClick={() => {
          setIsClicked(true);
        }}
        id={elemId}
        type="button"
        aria-expanded={isClicked}
        className="kebab-kebab-3_P bg-white border-0"
        aria-label="More Options Collapsed">
        <KebabMenuIcon />
      </button>
      <ul
        aria-hidden="true"
        className={`${isClicked ? 'kebab-dropdown_active-pCR' : ''} kebab-dropdown-8k8 absolute bg-body grid items-center right-5 top-0 z-dropdown`}>
        {/* <li className="section-menuItem-8oh bg-white block border-b border-solid border-subtle w-full hover_bg-gray-300">
          <button
            disabled
            className="section-button-Fe9 flex gap-x-2.5 items-center justify-items-start p-2xs pb-3 pr-sm text-left w-full whitespace-pre"
            type="button"
            aria-label="Edit item">
            <EditIcon />
            <span className="product-sectionText-35W pointer-events-none px-2xs py-1 text-sm">Edit item</span>
          </button>
        </li> */}
        <li className="section-menuItem-8oh bg-white block border-b border-solid border-subtle w-full hover_bg-gray-300">
          <button
            onClick={removeItem}
            className="section-button-Fe9 flex gap-x-2.5 items-center justify-items-start p-2xs pb-3 pr-sm text-left w-full whitespace-pre"
            type="button"
            aria-label="Remove from cart">
            <BinIcon />
            <span className="product-sectionText-35W pointer-events-none px-2xs py-1 text-sm">Remove from cart</span>
          </button>
        </li>
        {/* <li>
          <button
            disabled
            className="product-addToListButton-2dE content-center gap-x-xs inline-flex px-2.5 py-3.5 text-sm w-full"
            type="button"
            aria-label="Add to Favorites">
            <FavIcon /> Save for later
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default MoreOptions;
