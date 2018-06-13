import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import PlayerAccordion from '../components/PlayerAccordion';
import Sorter from '../components/Sorter';
import SearchBar from '../components/SearchBar';

const styles = () => ({
  root: {
    maxWidth: '800px',
    marginTop: '30px',
    marginBottom: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    textAlign: 'center',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      sorting: 'name',
      searchTerm: '',
      fetchError: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/api/players')
      .then(response => response.json())
      .then(players => this.setState({ players }))
      .catch((error) => {
        this.setState({ fetchError: true });
        console.error(error);
      });
  }

  onSorting = (event) => {
    this.setState({ sorting: event.target.value });
  };

  onSearching = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const {
      players,
      sorting,
      searchTerm,
      fetchError,
    } = this.state;
    const { classes } = this.props;

    if (fetchError) {
      return (
        <div className={classes.error}>
          <Typography variant="display2">An error occurred.</Typography>
          <Typography variant="subheading">Make sure the server is running.</Typography>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <SearchBar onSearch={this.onSearching} searchTerm={searchTerm} />
          <Sorter onSort={this.onSorting} sorting={sorting} />
        </form>
        <PlayerAccordion players={players} sorting={sorting} searchTerm={searchTerm} />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Main);
