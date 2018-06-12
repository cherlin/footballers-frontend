import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function SearchBar({ classes, onSearch, searchTerm }) {
  return (
    <Fragment>
      <TextField
        id="search"
        label="Search (player or team)"
        className={classes.textField}
        value={searchTerm}
        onChange={e => onSearch(e)}
        margin="normal"
      />
    </Fragment>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchBar);
