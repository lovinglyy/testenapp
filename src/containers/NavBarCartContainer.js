import { connect } from 'react-redux';
import NavBarCart from '../components/NavBarCart';

const mapStateToProps = state => ({
  orderQuantity: state.orders.length,
});

const NavBarCartContainer = connect(
  mapStateToProps,
)(NavBarCart);

export default NavBarCartContainer;
