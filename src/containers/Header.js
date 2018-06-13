import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {
    backgroundColor: '#388E3C',
  },
  avatar: {
    marginRight: '20px',
    backgroundColor: 'white',
  },
});

function Header({ classes }) {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Avatar className={classes.avatar} alt="Football Logo" src="icons/favicon-32x32.png" />
        <Typography variant="title" color="inherit">The Footballers</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Header);
