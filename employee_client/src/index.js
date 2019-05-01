import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import EmployeeGetAll from './Components/EmployeeGetAll';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import EmployeeCreate from './Components/EmployeeCreate';
import EmpoyeeUpdateList from './Components/EmpoyeeUpdateList';
import EmpoyeeUpdate from './Components/EmpoyeeUpdate';
import EmployeeDelete from './Components/EmployeeDelete';
import FilterGender from './Components/FilterGender';
import Home from './Components/Home';
import EmployeeInfo from './Components/EmployeeInfo';

const routing = (
    <Router>
      <div>
        <Route path="/" component={Home}/>
        <Route path="/Get" component={EmployeeGetAll}/>
        <Route path="/create" component={EmployeeCreate}/>
        <Route path="/update/:id" component={EmpoyeeUpdate}/>
        <Route path="/updateEmployee" component={EmpoyeeUpdateList}/>
        <Route path="/delete" component={EmployeeDelete}/>
        <Route path="/filter" component={FilterGender}/>
        <Route path="/employeeInfo/:id" component={EmployeeInfo}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, window.document.getElementById('root'));
