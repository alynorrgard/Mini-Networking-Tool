import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './HomeComponent';
import AllCampuses from './AllCampusesComponent';
import AllStudents from './AllStudentsComponent';
import SingleCampus from './SingleCampusComponent';
import SingleStudent from './SingleStudentComponent';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <img src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805" />
          <Link to="/">Home</Link>
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
