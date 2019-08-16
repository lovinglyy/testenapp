import React from 'react';
import PropTypes from 'prop-types';
import Client from './Client';
import './ClientList.css';

/**
 * ClientList is rendered by the route, it outputs every client from the json in a
 * Client react component, wrapping it with the current page style.
 * @param  {object} {clients} Data source that can be mapped, clients only have id and name.
 */
const ClientList = ({ clients }) => (
  <div className="clientList">
    {clients.map(client => (
      <Client
        key={client.id}
        name={client.name}
        id={client.id}
      />
    ))}
  </div>
);

ClientList.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ClientList;
