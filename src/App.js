import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Main from './Main';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <div className="document-wrapper">
      <Header />
      <Main />
    </div>
  </React.Fragment>
);

export default App;
