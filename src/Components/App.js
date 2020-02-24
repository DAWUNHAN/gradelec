import React, {Component} from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';
import Top from './Top';

class App extends Component {
  render() {
    return (
      <>
        <Top></Top>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}
export default App;
