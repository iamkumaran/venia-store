import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';
import PRODUCT_DETAIL_QUERY from '../../../utils/gql/product-detail.gql';
import Gallery from './Gallery/Gallery';
import Spec from './Spec/Spec';
import SwatchSection from './Swatch/SwatchSection';
import Quantity from './Quantity/Quantity';
import AddToCartSection from './AddToCartSection/AddToCartSection';
import Title from './Content/Title';
import Description from './Content/Description';
import { getVariantProduct } from '../../../utils/helper';
import ADD_TO_CART_MUTATION from '../../../utils/gql/mutations/add-to-cart.gql';

const Component = () => {
  const [shouldPause, seShouldPause] = useState(false);
  const [productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const [, cartCallHandler] = useMutation(ADD_TO_CART_MUTATION);

  const [result] = useQuery({
    query: PRODUCT_DETAIL_QUERY,
    variables: {
      urlKey: 'daria-crochet-skirt',
    },
    // this is required when useMutation call happens this query is getting executed unnecessary.
    pause: shouldPause,
  });

  const { data, fetching, error } = result;

  const handleSizeChange = () => {
    console.log('options', selectedColor, selectedSize);
    const variantObj = getVariantProduct(data?.products?.items?.[0]?.variants, selectedColor, selectedSize);
    console.log('product', variantObj);
    // create a copy to avoid reference for gallery
    const variantProduct = structuredClone(variantObj);
    // Variant Image + Product images
    variantProduct.product.media_gallery_entries = [
      ...variantProduct.product.media_gallery_entries,
      ...data.products.items[0].media_gallery_entries,
    ];
    setProductData(variantProduct.product);
  };

  // After getting product data.
  useEffect(() => {
    // console.log('fetching, error', fetching, error);
    // alert('sdsds');
    if (!fetching && data?.products?.items?.[0]) {
      seShouldPause(true);
      setProductData(data.products.items[0]);
    }
  }, [fetching, data]);

  // when size or color options are selected.
  useEffect(() => {
    if (selectedSize || selectedColor) {
      handleSizeChange();
    }
  }, [selectedColor, selectedSize]);

  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;
  // if (!productData) return null;

  const initialProduct = data?.products?.items?.[0];

  return (
    <form className="productFullDetail-root-1E7 px-0 py-xs lg_grid lg_grid-flow-row lg_items-start lg_px-xs lg_py-md">
      {fetching && (
        <Gallery
          item={[{ uid: 123456, label: 'Loading', file: document.head.querySelector('meta[name=preload]')?.content }]}
          preload
        />
      )}
      {!fetching && productData && (
        <>
          <Gallery item={productData.media_gallery_entries} />
          <Title name={productData.name} priceObj={productData.price_range.maximum_price.final_price} />
          <SwatchSection
            data={initialProduct.configurable_options}
            setColor={setSelectedColor}
            setSize={setSelectedSize}
            handler={handleSizeChange}
          />
          <Quantity setQty={setSelectedQty} />
          <AddToCartSection
            sizeUid={selectedSize?.uid}
            colorUid={selectedColor?.uid}
            sku={initialProduct.sku}
            quantity={selectedQty}
            triggerCall={cartCallHandler}
          />
          <Description content={initialProduct.description.html} />
          <Spec specs={productData.custom_attributes} sku={initialProduct.sku} />
        </>
      )}
    </form>
  );
};

export default Component;
