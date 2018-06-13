import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PlayerDetails from './PlayerDetails';

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
    backgroundColor: 'black',
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

  sortPlayers = (a, b) => {
    const { sorting } = this.props;
    if (sorting === 'name') {
      if (a.name < b.name) return -1;
      return 1;
    }
    if (Number(a.ranking) < Number(b.ranking)) return -1;
    return 1;
  }

  searchFilter = (player) => {
    const { searchTerm } = this.props;
    const { name, teamName } = player;
    if (!searchTerm) return player;
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teamName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  render() {
    const { expanded } = this.state;
    const { players, classes } = this.props;

    return (
      <Fragment>
        { players.filter(this.searchFilter).sort(this.sortPlayers).map(player => (
          <ExpansionPanel
            key={player.playerId}
            expanded={expanded === player.playerId}
            onChange={this.handleChange(player.playerId)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Avatar className={classes.avatar}>
                {player.ranking}
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
      </Fragment>
    );
  }
}

PlayerAccordion.propTypes = {
  players: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  sorting: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withStyles(styles)(PlayerAccordion);
