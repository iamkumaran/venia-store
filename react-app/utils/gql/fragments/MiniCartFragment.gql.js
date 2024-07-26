import ProductListFragment from './ProductListFragment.gql';

export default `
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
  ${ProductListFragment}
`;
