import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


/**
 * Shows the rentability status depending on the price method option selected.
 * @param  {string} method Either '0'(price will be the product's recommended
 * price) or '1'(price is the custom one, and checks for rentability will be made).
 * @param  {number} customPrice Custom price specified by the user
 * @param  {number} productPrice Product's original price
 */
const Rentability = ({ method, customPrice, productPrice }) => {
  if (method !== '1' || !customPrice) return null;
  if (customPrice > productPrice) {
    return (
      <Typography style={{ color: '#4ea64e', marginTop: '0.5em' }} variant="h6" gutterBottom>
                A rentabilidade é ótima.
      </Typography>
    );
  } if (customPrice >= productPrice - productPrice * 0.1) {
    return (
      <Typography style={{ color: '#5fb8c9', marginTop: '0.5em' }} variant="h6" gutterBottom>
                A rentabilidade é boa.
      </Typography>
    );
  }

  return (
    <Typography style={{ color: '#d4493f', marginTop: '0.5em' }} variant="h6" gutterBottom>
                 A rentabilidade é ruim, defina um preço maior para poder adicionar esse pedido.
    </Typography>
  );
};

Rentability.propTypes = {
  method: PropTypes.string.isRequired,
  customPrice: PropTypes.number.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default Rentability;
