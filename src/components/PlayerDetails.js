import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const PlayerDetails = ({ player }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="subheading">
      { `
      ${player.firstName} ${player.lastName} is ${player.age} years old, weighs 
      ${player.weight} kilos and is ${player.height} centimeters 
      tall. He currently plays ${player.positionText} (earlier ${player.playedPositions.substring(1, player.playedPositions.length - 1).replace(/-/g, ', ')}). 
      During the ${player.seasonName} season, he played ${player.minsPlayed} minutes, scored ${player.goal} goals and assisted in ${player.assistTotal}. 
      He recieved ${player.yellowCard} yellow cards and ${player.redCard} red ones. ${player.firstName} has been declared Man of the match ${player.manOfTheMatch} times.
      `}
    </Typography>
  </div>
);

PlayerDetails.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PlayerDetails;
