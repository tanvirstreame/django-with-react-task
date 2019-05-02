import React, { Component } from 'react';
import './App.css';
import logo from './assets/pic.png'
import { Link } from 'react-router-dom'
class EmployeeGetAll extends Component {
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
            {this.state.todos.map(item => (
              <Link className="linkelement"  to={`/employeeInfo/${item.id}`}>
                <div className="card m-hover">
                   <div className="card-body">
                       <div key={item.id}>
                       <img  className="imgcir " src={logo} alt={"logo"}/> 
                       <h4 className="text-center">{item.username}</h4>
                       <div className="row text-center m-center">
                        <p className="text-center">{item.gender}</p><i className="fas fa-restroom"></i>
                       </div>
                       <div className="row text-center m-center">
                        <i class="fas fa-building"></i><span>{item.city}</span><i class="fas fa-globe-americas"></i><span>{item.country}</span>
                       </div>
                    </div>
                  </div> 
                </div>
              </Link>
            ))}
          </div>
      </div>
    );
  }
}

export default EmployeeGetAll;
