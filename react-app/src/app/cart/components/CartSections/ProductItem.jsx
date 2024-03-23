import React, { useState } from 'react';
import MoreOptions from './MoreOptions';
import { useStoreContext } from '../../../../library/context/store/StoreContext';
import { updateImgDomain } from '../../../../utils/helper';
import { CURRENCY } from '../../../../utils/config/constants';
import QuantityStepper from '../../../../library/QuantityStepper/QuantityStepper';

const ProductItem = ({ item, i }) => {
  const {
    state: { isLocal },
  } = useStoreContext();
  const addQs = isLocal ? '/?path=' : '';
  const {
    product,
    configurable_options: opts,
    quantity,
    prices: { price },
  } = item;

  const [selectedQty, setSelectedQty] = useState(quantity);

  return (
    <li className="product-root-2YO gap-y-2xs grid">
      <span className="product-errorText-2hT leading-normal text-error" />
      <div className="product-item-3Ev gap-x-2xs gap-y-xs grid items-start">
        <a
          className="product-imageContainer-1FL"
          href={`${addQs}/products/${product.url_key}/${product.uid.replaceAll('=', '-')}`}>
          <div className="product-imageRoot-3Gl h-full image-container-2U5 relative">
            <img
              loading={[0, 1, 2].includes(i) ? 'eager' : 'lazy'}
              aria-hidden="true"
              alt={product.name}
              className="product-image-1ZZ bg-subtle border border-solid border-subtle h-full object-contain object-center rounded-sm image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg=="
              width={100}
              style={{ '--width': 100 }}
            />
            <img
              loading={[0, 1, 2].includes(i) ? 'eager' : 'lazy'}
              fetchPriority={[0, 1, 2].includes(i) ? 'high' : null}
              alt={product.name}
              className="product-image-1ZZ bg-subtle border border-solid border-subtle h-full object-contain object-center rounded-sm image-loaded-3O9 absolute left-0 top-0"
              sizes="100px"
              src={updateImgDomain(`${product.small_image.url}?width=320&height=400`)}
              width={100}
              style={{ '--height': 125, '--width': 100 }}
            />
          </div>
        </a>
        <div className="product-details-1wz gap-2xs leading-normal sm_grid">
          <div className="product-name-27e font-semibold">
            <a href="/chloe-silk-shell.html">{product.name}</a>
          </div>
          <dl className="product-options-2TG gap-0.5 grid text-sm">
            {opts.map(opt => (
              <div
                key={`opt-${opt.configurable_product_option_value_uid}`}
                className="product-optionLabel-388 auto-cols-max grid grid-flow-col">
                <dt>{opt.option_label} :</dt>
                <dd className="productOptions-optionValue-3z6 ml-1">{opt.value_label}</dd>
              </div>
            ))}
          </dl>
          <span className="product-price-lkW text-sm">
            <span>{CURRENCY[price.currency]}</span>
            <span>{price.value}</span> ea.
          </span>
          <span className="product-stockStatusMessage-XOo font-semibold text-error text-sm" />
          <div className="product-quantity-2uA grid items-start justify-items-start sm_justify-items-center">
            <form>
              <QuantityStepper setQty={setSelectedQty} selectedQty={selectedQty} />
              {/* <div className="quantityStepper-root-39j gap-x-2xs grid items-center justify-items-center text-center">
                <label className="quantityStepper-label-1Sp">Quantity</label>
                <button
                  aria-label="Decrease Quantity"
                  className="quantityStepper-button_decrement-1vA quantityStepper-button-BAm bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed"
                  type="button">
                  <span className="quantityStepper-icon-1_J items-center inline-flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon-icon-_rq">
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </span>
                </button>
                <span
                  className="fieldIcons-root-Gff grid-flow-col h-[2.5rem] inline-grid w-full"
                  style={{ '--iconsbefore': 0, '--iconsafter': 0 }}>
                  <span className="fieldIcons-input-1wB items-center flex">
                    <input
                      aria-label="Item Quantity"
                      inputMode="numeric"
                      min={0}
                      pattern="[0-9]*"
                      className="quantityStepper-input-1RC textInput-input-1mC field-input-3CJ appearance-none bg-white border-2 border-solid border-input flex-textInput h-[2.5rem] inline-flex m-0 max-w-full rounded-md text-colorDefault text-colorDefault w-full focus_outline-none focus_shadow-inputFocus disabled_text-subtle text-center"
                      id="dcbc4ecf-f024-4066-a85f-0b825a582ca4"
                      name="quantity"
                      defaultValue={quantity}
                    />
                  </span>
                  <span className="fieldIcons-before-2dI flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground" />
                  <span
                    className="fieldIcons-after-3Uw flex items-center justify-center mx-0.5 my-0 pointer-events-none w-[2.5rem] z-foreground"
                    aria-hidden="false"
                  />
                </span>
                <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
                <button
                  aria-label="Increase Quantity"
                  className="quantityStepper-button_increment-1ih quantityStepper-button-BAm bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed"
                  type="button">
                  <span className="quantityStepper-icon-1_J items-center inline-flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon-icon-_rq">
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </span>
                </button>
              </div> */}
            </form>
          </div>
        </div>
        <div className="product-kebab-3dI relative">
          <button
            type="button"
            aria-expanded="false"
            className="kebab-kebab-3_P bg-white border-0"
            aria-label="More Options Collapsed">
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
                <circle cx={12} cy={12} r={1} />
                <circle cx={12} cy={5} r={1} />
                <circle cx={12} cy={19} r={1} />
              </svg>
            </span>
          </button>
          <MoreOptions />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
