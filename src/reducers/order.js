import { isNumber } from '../utils';

let currrentOrderID = 0;

/**
 * Reducer for the orders, all checks here are also checked
 * on the UI before.
 * @param  {array} state=[] Orders state
 * @param  {object} action Payload
 */
const orders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      if (!isNumber(action.order.priceMethod)
          || (!isNumber(action.order.customPrice) && action.order.priceMethod === 1)
          || (!isNumber(action.order.quantity))) {
        return state;
      }

      if (!Number.isInteger(action.order.quantity) || action.order.quantity < 1) {
        return state;
      }

      if (action.order.priceMethod !== 0 && action.order.priceMethod !== 1) {
        return state;
      }

      if (action.order.customPrice < 1 && action.order.priceMethod === 1) {
        return state;
      }

      if ((action.order.quantity % action.order.product.multiple) !== 0) {
        return state;
      }

      const order = {
        id: currrentOrderID,
        product: action.order.product,
        quantity: action.order.quantity,
      };

      currrentOrderID += 1;

      order.price = (action.order.priceMethod === 0)
        ? action.order.product.price.toFixed(2)
        : action.order.customPrice.toFixed(2);

      return [
        ...state,
        order,
      ];
    }
    case 'REMOVE_PRODUCT': {
      return state.filter(item => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default orders;
