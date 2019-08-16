export const addOrder = order => ({
  type: 'ADD_PRODUCT',
  order,
});

export const removeOrder = id => ({
  type: 'REMOVE_PRODUCT',
  id,
});
