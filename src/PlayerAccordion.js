import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PlayerDetails from './PlayerDetails';

const byName = (a, b) => {
  if (a.name < b.name) return -1;
  return 1;
};

const styles = theme => ({
  root: {
    maxWidth: '800px',
    marginTop: '30px',
    marginBottom: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    marginRight: '20px',
    alignSelf: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '50%',
    flexShrink: 0,
    alignSelf: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class PlayerAccordion extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: null,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    const { players, classes } = this.props;

    return (
      <div className={classes.root}>
        { players.sort(byName).map(player => (
          <ExpansionPanel
            key={player.playerId}
            expanded={expanded === player.playerId}
            onChange={this.handleChange(player.playerId)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Avatar className={classes.avatar}>
                <ImageIcon />
              </Avatar>
              <div style={{ flexDirection: 'column' }}>
                <Typography className={classes.heading}>{player.name}</Typography>
                <Typography
                  className={classes.secondaryHeading}
                >
                  {player.teamName} ({player.tournamentName})
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <PlayerDetails player={player} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

PlayerAccordion.propTypes = {
  players: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(PlayerAccordion);
