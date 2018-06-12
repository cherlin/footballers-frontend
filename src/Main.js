import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PlayerAccordion from './PlayerAccordion';
import Sorter from './Sorter';
import SearchBar from './SearchBar';

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
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      sorting: 'name',
      searchTerm: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/api/players')
      .then(response => response.json())
      .then(players => this.setState({ players }));
  }

  onSorting = (event) => {
    this.setState({ sorting: event.target.value });
  };

  onSearching = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { players, sorting, searchTerm } = this.state;
    const { classes } = this.props;

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
