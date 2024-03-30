import React, { useState } from 'react';
import MoreOptions from './MoreOptions';
import { useStoreContext } from '../../../../library/context/store/StoreContext';
import { getCartIdFromStorage, updateImgDomain } from '../../../../utils/helper';
import { CURRENCY } from '../../../../utils/config/constants';
import QuantityStepper from '../../../../library/QuantityStepper/QuantityStepper';

const ProductItem = ({ item, i, updateCartItemsCall, removeCartItemCall }) => {
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

  const updateQty = qty => {
    const variables = {
      cartId: getCartIdFromStorage(),
      quantity: qty,
      itemId: item.uid,
    };
    updateCartItemsCall(variables).then(resp => {
      if (resp.error) {
        return false;
      }
      console.log('Update cart mutant call resp', resp);
      setSelectedQty(qty);
      return true;
    });
  };

  const removeItem = () => {
    const variables = {
      cartId: getCartIdFromStorage(),
      itemId: item.uid,
    };
    removeCartItemCall(variables).then(resp => {
      if (resp.error) {
        return false;
      }
    });
  };

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
              <QuantityStepper setQty={updateQty} selectedQty={selectedQty} />
            </form>
          </div>
        </div>

        <MoreOptions removeItem={removeItem} />
      </div>
    </li>
  );
};

export default ProductItem;
