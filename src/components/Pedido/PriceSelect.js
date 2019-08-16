import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 0 21%',
    minWidth: '22vw',
  },
  inline: {
    display: 'inline',
  },
  gridItem: {
    textAlign: 'center',
  },
  spacing: {
    margin: theme.spacing(0.5),
  },
}));

/**
 * Radios that changes it's parent local state by getting it's hook functions.
 * @param  {string} priceMethod Either '0'(price will be the product's recommended
 * price) or '1'(price is the custom one, and checks for rentability will be made).
 * @param  {function} handlePriceMethodChange Function that manages priceMethod
 * variable from ReactHook.
 * @param  {function} handleCustomPriceChange Function that manages customPrice
 * variable from ReactHook.
 * @param  {number} productPrice Product's original price
 */
const PriceSelect = ({
  priceMethod, handlePriceMethodChange, handleCustomPriceChange, productPrice,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.gridItem} item xs={12}>
        <Typography variant="h5" gutterBottom>
            Defina o preço
        </Typography>
      </Grid>
      <Grid className={classes.gridItem} item xs={6}>
        <Chip
          className={classes.spacing}
          color="secondary"
          label={`Preço sugerido: ${productPrice}`}
          size="small"
          avatar={<Avatar><MoneyIcon /></Avatar>}
        />
        <Radio
          checked={priceMethod === '0'}
          onChange={handlePriceMethodChange}
          className={classes.radio}
          value="0"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'Preco' }}
        />
      </Grid>
      <Grid className={classes.gridItem} item xs={6}>

        <FormControl>
          <Input
            id="customPrice"
            placeholder="Ou seu próprio preço!"
            multiline
            onChange={handleCustomPriceChange}
            className={classes.textField}
            margin="normal"
            endAdornment={(
              <InputAdornment position="end">
                <Radio
                  checked={priceMethod === '1'}
                  onChange={handlePriceMethodChange}
                  value="1"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'Preco' }}
                />
              </InputAdornment>
)}
          />
        </FormControl>
      </Grid>
    </>
  );
};

PriceSelect.propTypes = {
  priceMethod: PropTypes.string.isRequired,
  handlePriceMethodChange: PropTypes.func.isRequired,
  handleCustomPriceChange: PropTypes.func.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default PriceSelect;
