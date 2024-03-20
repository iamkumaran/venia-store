const ADD_TO_CART_MUTATION = `mutation AddProductToCart($cartId: String!, $product: CartItemInput!) {
  addProductsToCart(cartId: $cartId, cartItems: [$product]) {
    cart {
      id
      ...CartTriggerFragment
      ...MiniCartFragment
      __typename
    }
    user_errors {
      code
      message
      __typename
    }
    __typename
  }
}

fragment CartTriggerFragment on Cart {
  id
  total_quantity
  total_summary_quantity_including_config
  __typename
}

fragment MiniCartFragment on Cart {
  id
  total_quantity
  prices {
    subtotal_excluding_tax {
      currency
      value
      __typename
    }
    subtotal_including_tax {
      currency
      value
      __typename
    }
    __typename
  }
  ...ProductListFragment
  __typename
}

fragment ProductListFragment on Cart {
  id
  items {
    uid
    product {
      uid
      name
      sku
      url_key
      thumbnail {
        url
        __typename
      }
      stock_status
      ... on ConfigurableProduct {
        variants {
          attributes {
            uid
            __typename
          }
          product {
            uid
            thumbnail {
              url
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    prices {
      price {
        currency
        value
        __typename
      }
      total_item_discount {
        value
        __typename
      }
      __typename
    }
    quantity
    ... on ConfigurableCartItem {
      configurable_options {
        configurable_product_option_uid
        option_label
        configurable_product_option_value_uid
        value_label
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`;

export default ADD_TO_CART_MUTATION;
