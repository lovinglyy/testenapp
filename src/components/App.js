import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ClientList from './ClientList';
import OrderList from './OrderList';
import Products from './Products';
import Pedido from './Pedido';
import PrivateRoute from '../containers/PrivateRoute';
import './App.css';
import ClientsData from '../clients.json';

/**
 * App's root, wrapped with CookiesProvider that gives a context for
 * the cookies and displaying a Router component.
 */
const App = () => (
  <CookiesProvider>
    <Router>
      <Route exact path="/" render={() => <ClientList clients={ClientsData} />} />
      <PrivateRoute path="/produtos" component={Products} />
      <PrivateRoute path="/pedir/:id" component={Pedido} />
      <PrivateRoute path="/orderlist" component={OrderList} />
    </Router>
  </CookiesProvider>
);

export default App;
