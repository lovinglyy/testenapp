import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { compose } from 'redux';
import ArrowIcon from '@material-ui/icons/ChevronLeft';
import { withCookies, Cookies } from 'react-cookie';
import {
  withRouter,
} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import NavBarCartContainer from '../containers/NavBarCartContainer';
import ClientsData from '../clients.json';
import { getAcronym, getDefaultProfilePicStyle } from '../utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: '1em',
    fontSize: '1em',
  },
}));

/**
 * The NavBar renders a bit of design and a NavBarCartContainer component,
 * is has two HOCs, one to access cookies and another for history and location
 * objects from the router.
 * @param  {object} cookies A instance of Cookies. See more in https://www.npmjs.com/package/react-cookie.
 * @param  {object} history Object from ReactRouter used to programatically change the route.
 * @param  {object} location Location object from ReactRouter.
 */
const NavBar = ({ cookies, history, location }) => {
  const classes = useStyles();
  const client = ClientsData.find(e => e.id === cookies.get('sessionID'));

  const avatarStyle = getDefaultProfilePicStyle(client.name);

  const onClick = () => {
    if (location.pathname.startsWith('/pedir/')
          || location.pathname.startsWith('/orderlist')) {
      history.push('/produtos');
    } else {
      cookies.remove('sessionID', { path: '/' });
      history.push('/');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={onClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowIcon />
          </IconButton>
          <Avatar style={avatarStyle} className={classes.avatar}>
            { getAcronym(client.name) }
          </Avatar>
          <Typography variant="h6" className={classes.title}>
            {client.name}
          </Typography>
          <div className={classes.grow} />
          <NavBarCartContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default compose(
  withCookies,
  withRouter,
)(NavBar);
