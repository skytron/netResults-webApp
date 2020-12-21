import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from './pages/Home/Home';
import DownloadPage from './pages/DownloadPage';

// Components
import Header from './components/Header/Header';

export default function () {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/download" exact component={DownloadPage} />
        </Switch>
      </>
    </Router>
  );
}