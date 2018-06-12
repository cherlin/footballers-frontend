import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const PlayerDetails = ({ player }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="subheading">
      { `
      ${player.firstName} ${player.lastName} is ${player.age} years old, weighs 
      ${player.weight} kilos and is ${player.height} centimeters 
      tall. During the ${player.seasonName} season, he played ${player.minsPlayed} minutes, 
      scored ${player.goal} goals and assisted in ${player.assistTotal}.
      `}
    </Typography>
  </div>
);

PlayerDetails.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PlayerDetails;
