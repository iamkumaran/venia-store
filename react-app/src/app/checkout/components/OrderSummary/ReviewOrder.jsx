import React from 'react';
import { useQuery } from 'urql';
import GET_ITEMS_CART_QUERY from '../../../../utils/gql/get-items-cart';
import { getCartIdFromStorage, updateImgDomain } from '../../../../utils/helper';

const ReviewOrder = () => {
  // get price query
  const [result] = useQuery({
    query: GET_ITEMS_CART_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div className="checkoutPage-items_review_container-3fO">
      <div className="itemsReview-items_review_container-2n7 border-2 border-solid border-subtle rounded-md">
        <div className="itemsReview-items_container-2X6 grid px-md py-sm">
          <div className="itemsReview-total_quantity-iNO">
            <span className="itemsReview-total_quantity_amount-1rA font-semibold">7</span> items in your order
          </div>
          {data?.cart?.items?.length > 0 &&
            data?.cart?.items?.map(item => (
              <div
                key={`review-${item.uid}`}
                className="item-root_visible-3GD item-root-3Cy gap-x-xs grid grid-cols-autoFirst overflow-hidden h-auto mt-sm opacity-100 visible">
                <div className="item-thumbnail-16V border border-solid border-subtle image-container-2U5 relative">
                  <img
                    loading="eager"
                    aria-hidden="true"
                    alt="Chloe Silk Shell"
                    className="image-image-vYj image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg=="
                    width={100}
                    style={{ '--width': 100 }}
                  />
                  <img
                    loading="lazy"
                    alt={item.product.name}
                    className="image-image-vYj image-loaded-3O9 absolute left-0 top-0"
                    sizes="100px"
                    src={updateImgDomain(`${item.product.thumbnail.url}?width=100&height=125`)}
                    width={100}
                    style={{ '--height': 125, '--width': 100 }}
                  />
                </div>
                <span className="item-name-3-f font-semibold">{item.product.name}</span>
                {item.configurable_options.length > 0 && (
                  <dl className="item-options-1qh gap-2xs grid mt-xs text-sm">
                    {item.configurable_options.map(opt => (
                      <div
                        key={`ck-opt-${opt.value_label}-${opt.option_label}`}
                        className="productOptions-optionLabel-3Pu auto-cols-max grid grid-flow-col">
                        <dt>{opt.option_label} :</dt>
                        <dd className="productOptions-optionValue-3z6 ml-1">{opt.value_label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <span className="item-quantity-5yM mt-xs text-sm">Qty : {item.quantity}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
