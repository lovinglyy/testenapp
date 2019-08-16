import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeOrder } from '../actions';
import OrderTable from '../components/OrderList/OrderTable';

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = {
  removeOrder,
};

OrderTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

const OrderTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderTable);

export default OrderTableContainer;
