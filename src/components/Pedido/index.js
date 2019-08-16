import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import InfoPedidoContainer from '../../containers/InfoPedidoContainer';
import '../App.css';

/**
 * Rendered by the route, match is used here to get the
 * ID specified in '/pedir/:id', as we need to get the info of the
 * queried product.
 * @param  {object} {match} ReactRouter match object.
 */
const Pedido = ({ match }) => (
  <div>
    <NavBar />
    <Container className="Content" maxWidth="md">
      <InfoPedidoContainer id={match.params.id} />
    </Container>
  </div>
);

Pedido.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};


export default Pedido;
