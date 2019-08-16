import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

/**
 * OrderTableItem contains all data from the order and a remove button
 * for them.
 * @param  {object} order Object that represents an order.
 * @param  {function} removeFunc Function used to remove this order,
 * it will be set in the Remover button's onClick of this item.
 */
const OrderTableItem = ({ order, removeFunc }) => (
  <TableRow key={order.id}>
    <TableCell component="th" scope="row">
      {order.product.name}
    </TableCell>
    <TableCell align="right">{order.quantity}</TableCell>
    <TableCell align="right">{order.price}</TableCell>
    <TableCell align="right">
      <Button onClick={removeFunc} color="primary">
                    Remover
      </Button>
    </TableCell>
  </TableRow>
);

OrderTableItem.propTypes = {
  removeFunc: PropTypes.func.isRequired,
  order: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      product: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    },
  ).isRequired,
};


export default OrderTableItem;
