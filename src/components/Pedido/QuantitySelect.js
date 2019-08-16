import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  qtyGrid: {
    margin: theme.spacing(5),
    textAlign: 'center',
  },
}));

/**
 * A slider that changes it's parent local state by getting it's hook functions.
 * @param  {function} handleQtySliderChange Function that manages the hook set
 * variable for the quantity.
 * @param  {number} productMultiple Some products can be only sold in a certain
 * multiple value, this is that value from the product data.
 * @param  {number} quantity Quantity selected
 * @param  {function} handleQtyInputChange Function for the quantity hook variable
 * @param  {function} handleBlur Function to handle minimum slider input.
 */
const QuantitySelect = ({
  handleQtySliderChange, productMultiple, quantity, handleQtyInputChange, handleBlur,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.qtyGrid} container spacing={2} xs={6} alignItems="center">
        <Grid item xs={8}>
          <Slider
            value={typeof quantity === 'number' ? quantity : productMultiple}
            onChange={handleQtySliderChange}
            aria-labelledby="qty-slider"
            step={productMultiple}
            min={productMultiple}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            value={quantity}
            margin="dense"
            onChange={handleQtyInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: productMultiple,
              min: productMultiple,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

QuantitySelect.propTypes = {
  handleQtySliderChange: PropTypes.func.isRequired,
  handleQtyInputChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  productMultiple: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default QuantitySelect;
