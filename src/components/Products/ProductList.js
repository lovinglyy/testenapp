import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ProductListItem from './ProductListItem';
import productsData from '../../products.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
  },
}));

/**
 * Maps every product from the data source in ProductListItem
 * react components.
 */
const ProductList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
                productsData.map(product => (
                  <ProductListItem
                    name={product.name}
                    price={product.price}
                    multiple={product.multiple}
                    id={product.id}
                    key={product.id}
                  />
                ))
            }
    </List>
  );
};

export default ProductList;
