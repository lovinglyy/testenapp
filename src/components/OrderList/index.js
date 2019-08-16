import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar';
import OrderTableContainer from '../../containers/OrderTableContainer';
import '../App.css';

/**
 * OrderList is the component in /orderlist route, wrapping the
 * components that create the page.
 */
const OrderList = () => (
  <div>
    <NavBar />
    <Container className="Content" maxWidth="md">
      <OrderTableContainer />
    </Container>
  </div>
);

export default OrderList;
