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
