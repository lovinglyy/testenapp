import React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';
import Avatar from '@material-ui/core/Avatar';
import { getAcronym, getDefaultProfilePicStyle } from '../../utils';

const useStyles = makeStyles(() => ({
  card: {
    flex: '1 0 21%',
    margin: '1em',
    minWidth: '140px',
  },
  details: {
    display: 'inline-block',
    width: '65%',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    height: '100%',
    width: '35%',
    borderRadius: '0',
    float: 'right',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '0.1em',
    paddingBottom: '0.1em',
  },
}));

/**
 * Represents a Client card that sets cookie of the selected client and move to the /produtos route
 * if selected.
 * @param  {string} name Client's name, rendered in the card title and used to get the acronym.
 * @param  {number} id Client's ID from clients.json/data source
 * @param  {object} cookies A instance of Cookies. See more in https://www.npmjs.com/package/react-cookie.
 * @param  {object} history History object from ReactRouter, used to programatically change the
 * current route to /produtos.
 */
const Client = ({
  name, id, cookies, history,
}) => {
  const onClick = () => {
    cookies.set('sessionID', id, { path: '/' });
    history.push('/produtos');
  };

  const classes = useStyles();

  const avatarStyle = getDefaultProfilePicStyle(name);

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={onClick} aria-label="select">
            <LaunchIcon />
          </IconButton>
        </div>
      </div>
      <Avatar style={avatarStyle} className={classes.avatar}>{ getAcronym(name) }</Avatar>
    </Card>
  );
};

Client.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withRouter(withCookies(Client));
