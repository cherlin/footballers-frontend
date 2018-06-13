import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './containers/Header';
import Main from './containers/Main';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <Main />
  </React.Fragment>
);

export default App;
