import React from 'react';
import ProductItem from './ProductItem';

const CartGhost = () => {
  return (
    <div className="main-page-3Fo max-w-site mx-auto my-0">
      <div className="cartPage-body-3FT grid gap-md">
        <div className="cartPage-items_container-1RJ">
          <ul className="productListing-root-1Vx gap-x-md gap-y-xs grid">
            <ProductItem
              i={0}
              item={{
                product: {
                  name: 'Loading...',
                  uid: '',
                  url_key: '',
                  small_image: { url: document.head.querySelector('meta[name=preload]')?.content },
                },
                quantity: 0,
                configurable_options: [
                  {
                    configurable_product_option_value_uid: '0',
                    option_label: '',
                    value_label: '',
                  },
                  {
                    configurable_product_option_value_uid: '1',
                    option_label: '',
                    value_label: '',
                  },
                ],
                prices: { price: 0, currency: 'USD' },
              }}
              isGhost
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartGhost;
