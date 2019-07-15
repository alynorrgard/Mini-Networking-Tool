import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import AddContact from './AddContactPage';
import Profile from './ProfilePage';
import Search from './SearchPage';
import NotFound from './NotFoundPage';

const Root = () => {
  const logo =
    'data:image/png;base64,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';

  return (
    <Router>
      <div className="App">
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addcontact" component={AddContact} />
          <Route path="/contacts/:userId" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
