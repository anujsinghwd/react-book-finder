import React from 'react';
import SearchAppBar from './Components/common/SearchAppBar';
import Album from './Components/Album';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grids from './Components/common/Grids';


function App() {
  return (
    <Provider store={ store }>
      <Router>
        <SearchAppBar />
        <Route exact path="/react-book-finder" component={Album} />
        <Route exact path="/detail" component={Grids} />
      </Router>
    </Provider>
  );
}

export default App;
