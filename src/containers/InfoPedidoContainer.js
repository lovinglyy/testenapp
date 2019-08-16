import { connect } from 'react-redux';
import { addOrder } from '../actions';
import InfoPedido from '../components/Pedido/InfoPedido';

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = {
  addOrder,
};

const InfoPedidoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoPedido);

export default InfoPedidoContainer;
