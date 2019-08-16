import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingIcon from '@material-ui/icons/ShoppingBasket';

/**
 * NavBarCart shows a icon and a badge with the number of orders.
 * @param  {number} {orderQuantity} Quantity of orders in the orders state.
 */
const NavBarCart = ({ orderQuantity }) => (
  <div>
    <IconButton aria-label="orders" color="inherit">
      <Link to="/orderlist" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Badge badgeContent={orderQuantity} color="secondary">
          <ShoppingIcon />
        </Badge>
      </Link>
    </IconButton>
  </div>
);

NavBarCart.propTypes = {
  orderQuantity: PropTypes.number.isRequired,
};

export default connect()(NavBarCart);
