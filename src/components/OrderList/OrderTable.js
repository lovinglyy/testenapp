import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { removeOrder } from '../../actions';
import OrderTableItem from './OrderTableItem';

/**
 * This component will list all orders made and create a OrderTableItem
 * component for each one of them.
 * @param  {array} orders Array of objects that represent orders.
 * @param  {function} dispatch Redux dispatch function, used to remove orders.
 */
const OrderTable = ({ orders, dispatch }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Produto</TableCell>
          <TableCell align="right">Quantidade</TableCell>
          <TableCell align="right">Preço</TableCell>
          <TableCell align="right" />
        </TableRow>
      </TableHead>
      <TableBody>
        {
          orders.map(order => (
            <OrderTableItem
              removeFunc={() => dispatch(removeOrder(order.id))}
              order={order}
            />
          ))
        }
      </TableBody>
    </Table>
  </Paper>
);

OrderTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      product: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect()(OrderTable);
