import React from 'react';
import Button from '@material-ui/core/Button';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import {
  PDFDownloadLink, Page, Text, View, Document, StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    color: 'black', textAlign: 'center', margin: 30, fontSize: 12,
  },
});

const PdfPage = ({ orders }) => (
  <Document>
    <Page size="A4" style={styles.section}>
      <View>
        <Text>
            Lista de Pedidos #
          {uniqid()}
        </Text>
      </View>
      {
            orders.map(order => (
              <View key={order.id}>
                <Text>
                  {order.product.name}
                  {' '}
                x
                  {order.quantity}
                  {' '}
                - Preço:
                  {' '}
                  {order.price}
                </Text>
              </View>
            ))
        }
    </Page>
  </Document>
);

/**
 * Button that shows a print dialog.
 * @param  {array} orders Array of objects that represent orders.
 */
const EmitOrderButton = ({ orders }) => {
  if (!orders || orders.length === 0) return null;
  return (
    <PDFDownloadLink
      style={{ color: 'white', textDecoration: 'none' }}
      document={<PdfPage orders={orders} />}
      fileName="ListaDePedidos.pdf"
    >
      <Button color="primary" variant="contained">

            Emitir Pedido

      </Button>
    </PDFDownloadLink>
  );
};

EmitOrderButton.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      product: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

PdfPage.propTypes = EmitOrderButton.propTypes;

export default EmitOrderButton;
