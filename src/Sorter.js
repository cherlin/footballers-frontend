import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    justifyContent: 'flex-end',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Sorter({ classes, onSort, sorting }) {
  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sorting">Sorting</InputLabel>
        <Select
          value={sorting}
          onChange={e => onSort(e)}
          input={<Input name="sorting" id="sorting" />}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="ranking">Ranking</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
}

Sorter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Sorter);
