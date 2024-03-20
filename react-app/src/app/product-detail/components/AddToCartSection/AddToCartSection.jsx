import React from 'react';
import HeartIcon from '../../../../library/icons/HeartIcon';
import { getCartIdFromStorage } from '../../../../utils/helper';

const AddToCartSection = ({ sizeUid, colorUid, sku, quantity = 1, triggerCall }) => {
  const isActive = !!(sizeUid && colorUid);

  const addToCartHandler = e => {
    e.preventDefault();
    const variables = {
      cartId: getCartIdFromStorage(),
      product: {
        sku,
        quantity,
        selected_options: [colorUid, sizeUid],
      },
    };
    triggerCall(variables).then(resp => {
      console.log('Add to cart call resp', resp);
    });
  };

  return (
    <section className="productFullDetail-actions-bS9 gap-y-sm grid items-center justify-items-center productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs lg_border-b-0">
      <section className="productFullDetail-actButton-2Gz mt-sm">
        <button
          onClick={addToCartHandler}
          className="button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white"
          type="submit"
          disabled={isActive === false}
          aria-label=""
          aria-disabled={isActive === false}>
          <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
            Add to Cart
          </span>
        </button>
      </section>
      <button
        className="addToListButton-root-3FX gap-x-2xs inline-flex items-center min-w-[3rem]"
        type="button"
        aria-label="Add to Favorites">
        <HeartIcon />
        Add to Favorites
      </button>
    </section>
  );
};

export default AddToCartSection;
