import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { css } from 'glamor';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Typography from '@material-ui/core/Typography';
import { isNumber } from '../../utils';
import { addOrder } from '../../actions';
import productsData from '../../products.json';
import Rentability from './Rentability';
import PriceSelect from './PriceSelect';
import QuantitySelect from './QuantitySelect';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  gridItem: {
    textAlign: 'center',
  },
}));

/**
 * InfoPedido will find the id in the JSON and retrieve the
 * product that belongs to that id, then continue to show
 * the product info and the order settings. Redux is used
 * to insert the order in the order state in the store, hooks
 * are used in everything else to manage the local state.
 * @param  {number} id Product ID to search, based in the json
 * @param  {function} dispatch Redux function
 */
const InfoPedido = ({ id, dispatch }) => {
  const product = productsData.find(e => e.id === id);
  const [priceMethod, setPriceMethod] = React.useState('0');
  const [customPrice, setCustomPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(product.multiple);
  const classes = useStyles();

  const handlePriceMethodChange = (e) => {
    setPriceMethod(e.target.value);
  };

  const handleQtySliderChange = (e, newValue) => {
    setQuantity(newValue);
  };

  const handleCustomPriceChange = (e) => {
    setCustomPrice(e.target.value === '' ? product.multiple : Number(e.target.value));
  };

  const handleQtyInputChange = (e) => {
    setQuantity(e.target.value === '' ? product.multiple : Number(e.target.value));
  };

  const handleBlur = () => {
    if (quantity < product.multiple) {
      setQuantity(product.multiple);
    }
  };

  const notify = () => toast(
    'Pedido feito com sucesso! 🎉',
    {
      position: 'bottom-left',
      className: css({
        background: '#529e59 !important',
        color: 'black !important',
        textAlign: 'center',
      }),
    },
  );

  if (!product) {
    return (
      <div>
        Produto não encontrado.
      </div>
    );
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
                Produto:
        {' '}
        {product.name}

      </Typography>
      {product.multiple > 1
        ? (
          <Chip
            className={classes.spacing}
            color="secondary"
            variant="outlined"
            label={`x${product.multiple}`}
            size="small"
            icon={<LockIcon />}
          />
        )
        : null}
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
      >

        <PriceSelect
          priceMethod={priceMethod}
          handlePriceMethodChange={handlePriceMethodChange}
          handleCustomPriceChange={handleCustomPriceChange}
          productPrice={product.price}
        />
        <Grid className={classes.gridItem} item xs={6}>
          <Rentability
            method={priceMethod}
            customPrice={customPrice}
            productPrice={product.price}
          />
        </Grid>
        <QuantitySelect
          handleQtySliderChange={handleQtySliderChange}
          productMultiple={product.multiple}
          quantity={quantity}
          handleQtyInputChange={handleQtyInputChange}
          handleBlur={handleBlur}
        />
        <Grid className={classes.gridItem} item xs={12}>
          <Button
            disabled={
              (priceMethod === '1' && customPrice < product.price - product.price * 0.1)
                || !isNumber(quantity)
                || (!isNumber(customPrice) && priceMethod === '1')
                || (priceMethod === '1' && customPrice < 1) || quantity < 1
                || quantity % product.multiple !== 0
            }
            onClick={() => dispatch(addOrder({
              product,
              quantity,
              priceMethod: Number(priceMethod),
              customPrice,
              notify,
            }))}
            variant="contained"
            color="secondary"
            className={classes.spacing}
          >
            Realizar pedido
          </Button>
        </Grid>
      </Grid>

    </Paper>
  );
};

InfoPedido.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InfoPedido);
