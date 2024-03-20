import { gql } from 'urql';

const PRODUCT_DETAIL_QUERY = gql`
  query getProductDetailForProductPage($urlKey: String!) {
    products(filter: { url_key: { eq: $urlKey } }) {
      items {
        id
        uid
        ...ProductDetailsFragment
        __typename
      }
      __typename
    }
  }
  fragment ProductDetailsFragment on ProductInterface {
    __typename
    categories {
      uid
      breadcrumbs {
        category_uid
        __typename
      }
      __typename
    }
    description {
      html
      __typename
    }
    short_description {
      html
      __typename
    }
    id
    uid
    media_gallery_entries {
      uid
      label
      position
      disabled
      file
      __typename
    }
    meta_description
    name
    price {
      regularPrice {
        amount {
          currency
          value
          __typename
        }
        __typename
      }
      __typename
    }
    price_range {
      maximum_price {
        final_price {
          currency
          value
          __typename
        }
        discount {
          amount_off
          __typename
        }
        __typename
      }
      __typename
    }
    sku
    small_image {
      url
      __typename
    }
    stock_status
    url_key
    custom_attributes {
      selected_attribute_options {
        attribute_option {
          uid
          label
          is_default
          __typename
        }
        __typename
      }
      entered_attribute_value {
        value
        __typename
      }
      attribute_metadata {
        uid
        code
        label
        attribute_labels {
          store_code
          label
          __typename
        }
        data_type
        is_system
        entity_type
        ui_input {
          ui_input_type
          is_html_allowed
          __typename
        }
        ... on ProductAttributeMetadata {
          used_in_components
          __typename
        }
        __typename
      }
      __typename
    }
    ... on ConfigurableProduct {
      configurable_options {
        attribute_code
        attribute_id
        uid
        label
        values {
          uid
          default_label
          label
          store_label
          use_default_value
          value_index
          swatch_data {
            ... on ImageSwatchData {
              thumbnail
              __typename
            }
            value
            __typename
          }
          __typename
        }
        __typename
      }
      variants {
        attributes {
          code
          value_index
          __typename
        }
        product {
          uid
          media_gallery_entries {
            uid
            disabled
            file
            label
            position
            __typename
          }
          sku
          stock_status
          price {
            regularPrice {
              amount {
                currency
                value
                __typename
              }
              __typename
            }
            __typename
          }
          price_range {
            maximum_price {
              final_price {
                currency
                value
                __typename
              }
              discount {
                amount_off
                __typename
              }
              __typename
            }
            __typename
          }
          custom_attributes {
            selected_attribute_options {
              attribute_option {
                uid
                label
                is_default
                __typename
              }
              __typename
            }
            entered_attribute_value {
              value
              __typename
            }
            attribute_metadata {
              uid
              code
              label
              attribute_labels {
                store_code
                label
                __typename
              }
              data_type
              is_system
              entity_type
              ui_input {
                ui_input_type
                is_html_allowed
                __typename
              }
              ... on ProductAttributeMetadata {
                used_in_components
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
      __typename
    }
  }
`;

export default PRODUCT_DETAIL_QUERY;
