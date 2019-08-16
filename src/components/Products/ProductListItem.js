import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 0 21%',
    minWidth: '22vw',
  },
  inline: {
    display: 'inline',
  },
  spacing: {
    margin: theme.spacing(0.5),
  },
}));

/**
 * Show the product data with the info from the json,
 * the button is wrapped in a link that will change the route.
 * @param  {number} id Product ID
 * @param  {string} name Product name
 * @param  {number} price Product price
 * @param  {number} multiple Multiple that the product is
 * restricted in being sold in.
 */
const ProductListItem = ({
  id, name, price, multiple,
}) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemText
        primary={name}
        secondary={(
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              <Chip
                className={classes.spacing}
                color="secondary"
                component="span"
                label={price}
                size="small"
                avatar={<Avatar component="span"><MoneyIcon /></Avatar>}
              />
              {multiple > 1
                ? (
                  <Chip
                    className={classes.spacing}
                    component="span"
                    color="secondary"
                    variant="outlined"
                    label={`x${multiple}`}
                    size="small"
                    icon={<LockIcon />}
                  />
                )
                : null}

            </Typography>
          </>
)}
      />
      <ListItemSecondaryAction>
        <Link to={`/pedir/${id}`}>
          <Button variant="contained" color="secondary" className={classes.spacing}>
                Comprar
          </Button>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  multiple: PropTypes.number.isRequired,
};

export default ProductListItem;
