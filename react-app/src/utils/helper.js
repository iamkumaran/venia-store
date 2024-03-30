import { CART_TOKEN_KEY, IMG_SOURCE } from './config/constants';

/**
 * genarate unique ids to avaoid duplicate ids in one page
 * @param {String} prefix
 * @returns String (unique id)
 */
export const getUniqueID = prefix => {
  const timeStap = Date.now();
  const random = Math.random().toString().slice(2);
  const id = `${prefix || ''}_${timeStap}_${random}`;
  return id;
};

export const getSelectedFilterPayload = filtersList => {
  const obj = {};
  filtersList.forEach(item => {
    // for price, split the amount range to array like 40_80 => [40, 80]
    const arr = item.key === 'price' ? item.value.split('_') : [item.value];
    if (!obj?.[item.key]?.in?.length) {
      obj[item.key] = { in: [] };
      obj[item.key].in = arr;
    } else {
      obj[item.key].in.push(...arr);
    }
  });
  // update the price filter - which needs `from` and `to` value
  if (obj.price) {
    obj.price = { from: Math.min(...obj.price.in).toString(), to: Math.max(...obj.price.in).toString() };
  }
  return obj;
};

export const getVariantProduct = (variants = [], color = null, size = null) => {
  return variants.find(variant => {
    // when both option color and size are selected.
    if (color && size) {
      const [v1, v2] = variant.attributes;
      return (
        (v1.value_index === color.value_index && v2.value_index === size.value_index) ||
        (v1.value_index === size.value_index && v2.value_index === color.value_index)
      );
    }
    // when color is only selected.
    if (color) {
      return variant.attributes.find(attr => attr.value_index === color.value_index);
    }
    // when size is only selected
    if (size) {
      return variant.attributes.find(attr => attr.value_index === size.value_index);
    }
    //  when nothing is selected
    return null;
  });
};

export const getCartIdFromStorage = () => {
  const cartLocalData = localStorage.getItem(CART_TOKEN_KEY);
  if (cartLocalData) {
    const cartToken = JSON.parse(cartLocalData);
    if (cartToken.cartId) {
      return cartToken.cartId;
    }
  }
  return null;
};

export const updateDomCartCount = count => {
  const cartElem = document.querySelector('#mini-cart-section .cartTrigger-counter-2ju');
  if (cartElem && count) {
    cartElem.textContent = count;
  }
};

export const updateImgDomain = src => {
  if (!src) {
    return '';
  }
  const urlObj = new URL(src);
  return src.replace(urlObj.origin, IMG_SOURCE);
};

// works only on PLP and PDP pages.
export const extractDataFromUrl = () => {
  const { hostname, pathname, search } = window.location;
  const isLocal = hostname.includes('localhost');
  // let str = '';
  // if (!isLocal) {
  //   str = pathname?.split('/') || [];
  // } else {
  //   str = new URLSearchParams(search).get('path')?.split('/') || [];
  // }
  const arr = !isLocal ? pathname.split('/') : new URLSearchParams(search).get('path')?.split('/') || [];
  if (arr.length) {
    const uid = arr?.[arr.length - 1]?.replaceAll('-', '=');
    const urlKey = arr?.[arr.length - 2];
    // console.log('{ uid, urlKey }', { uid, urlKey });
    return { uid, urlKey };
  }
  return {};
};

export function lazyloadJS(url, target = null, callback = null) {
  const d = document;
  const s = d.createElement('script');
  const b = target || d.body || d.getElementsByTagName('body')[0];
  const attributes = {
    src: url,
    defer: 'defer',
  };
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const i in attributes) {
    s.setAttribute(i, attributes[i]);
  }
  if (callback) {
    s.onload = callback;
  }
  b.appendChild(s);
}

export const addPreloadImage = file => {
  if (file) {
    const elem = document.createElement('link');
    elem.setAttribute('rel', 'preload');
    elem.setAttribute('fetchpriority', 'high');
    elem.setAttribute('as', 'image');
    elem.setAttribute('href', file);
    elem.setAttribute('type', 'image/webp');
    document.head.append(elem);
  }
  // <link rel="preload" fetchpriority="high" as="image" href="/path/to/hero-image.webp" type="image/webp">
};
