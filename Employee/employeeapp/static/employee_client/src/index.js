import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CreateStudent from './createStudent';
import UpdateStudent from './StudentUpdate';
import DeleteStudent from './StudentDelete';
import FilterGender from './filterGender';


const routing = (
    <Router>
      <div>
        <Route path="/Get" component={App} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/update" component={UpdateStudent} />
        <Route path="/delete" component={DeleteStudent } />
        <Route path="/filter" component={FilterGender } />
      </div>
    </Router>
  )

ReactDOM.render(routing, window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
