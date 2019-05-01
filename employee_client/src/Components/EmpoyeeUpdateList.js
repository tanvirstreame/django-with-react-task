import React, { Component } from 'react';
import './App.css';
import logo from './assets/pic.png'
import { Link } from 'react-router-dom'
class EmpoyeeUpdateList extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/all');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
             <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>username</th>
                    <th>gender</th>
                    <th>city</th>
                    <th>country</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {this.state.todos.map(item => (
                  <tr>
                    <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.gender}</td>
                      <td>{item.city}</td>
                      <td>{item.country}</td>
                      <td><Link  className='btn btn-primary' to={`/update/${item.id}`}>Edit</Link>
                    </td>
                  </tr> 
                  ))}
                </tbody>
             </table>
          </div>
      </div>
    );
  }
}

export default EmpoyeeUpdateList;
