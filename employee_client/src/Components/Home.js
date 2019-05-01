import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Employee</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/Get"}>Veiw All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/create"}>Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/updateEmployee"}>Update</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/delete"}>Delete</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/filter"}>Filter</Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Home;
