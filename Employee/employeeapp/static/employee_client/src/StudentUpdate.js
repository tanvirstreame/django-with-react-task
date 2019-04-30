import React, { Component } from 'react';
import './App.css';
import logo from './pic.png'
import axios from 'axios';

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
  handleClick(e) {
    e.preventDefault();
    this.context.router.transitionTo('/');
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:8000/api/v1/Studentdetail/', {
      method: 'PUT',
      body: data,
    });
  }


  render() {
    return (


            <div class="card">
                  <div class="card-body">
                      <div class="panel panel-primary" >
                          <div class="panel panel-heading">Update Student</div>
                          <div class="panel panel-body">
                              <form onSubmit={this.handleSubmit} method="PUT">

                      <strong>Username:</strong><br/>       
                      <select name="username">
                      {this.state.todos.map(item => (
                           <option value="{item.username}">{item.username}</option>
                           ))}
                     </select>
                      <br/>
                        
                    


                           
                            <strong>Surname</strong> <br /> <input type="text" name="surname" placeholder="Surname" /> <br />
                            <strong>Gender</strong><br/>
                            <select name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> <br />
                            <strong>City</strong> <br /> <input type="text" name="city" placeholder="City" /> <br />
                            <strong>Country</strong> <br /> <input type="text" name="country" placeholder="country" /> <br /><br />
                            <button type="submit" class="btn btn-primary">Update Student</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      
        
      
    )



      
  }
}

export default UpdateStudent;