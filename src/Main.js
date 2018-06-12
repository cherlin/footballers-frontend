import React, { Component, Fragment } from 'react';
import PlayerAccordion from './PlayerAccordion';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { players: [] };
  }

  componentDidMount() {
    fetch('http://localhost:1337/api/players')
      .then(response => response.json())
      .then(players => this.setState({ players }));
  }

  render() {
    const { players } = this.state;

    return (
      <Fragment>
        <PlayerAccordion players={players} />
      </Fragment>
    );
  }
}
