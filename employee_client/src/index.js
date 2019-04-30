import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CreateStudent from './Components/createStudent';
import UpdateStudent from './Components/StudentUpdate';
import DeleteStudent from './Components/StudentDelete';
import FilterGender from './Components/filterGender';
import Home from './Components/Home';


const routing = (
    <Router>
      <div>
        <Route path="/Home" component={Home} />
        <Route path="/Get" component={App} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/update" component={UpdateStudent} />
        <Route path="/delete" component={DeleteStudent } />
        <Route path="/filter" component={FilterGender } />

      </div>
    </Router>
  )

ReactDOM.render(routing, window.document.getElementById('root'));
