import React from 'react';
import { CURRENCY } from '../../../../utils/config/constants';

const Title = ({ name, priceObj }) => {
  return (
    <section className="productFullDetail-title-vxG productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs gap-2 grid items-center leading-normal px-sm py-xs">
      <h1
        aria-live="polite"
        className="productFullDetail-productName-iar font-semibold text-colorDefault lg_font-normal lg_text-xl">
        {name}
      </h1>
      <p className="productFullDetail-productPrice-2Ob block mb-2">
        <span>{CURRENCY?.[priceObj.currency]}</span>
        <span>{priceObj.value}</span>
      </p>
      <div className="richContent-root-2XB" />
    </section>
  );
};

export default Title;
