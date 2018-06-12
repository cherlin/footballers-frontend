import React, { Component } from 'react';

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
      <div>
        <h1>Main</h1>
        { players.map(player => <div key={player.playerId}>{player.name}</div>) }
      </div>
    );
  }
}
