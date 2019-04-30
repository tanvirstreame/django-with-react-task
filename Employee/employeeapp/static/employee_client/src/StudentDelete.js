import React, { Component } from 'react';
import './App.css';
import logo from './pic.png'
import axios from 'axios';

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    todos: [],id: '',
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
  

 



  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://127.0.0.1:8000/api/v1/Studentdetail/2`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  


  render() {
    return (
            <div class="card">
                <div class="card-body">
                    <div class="panel panel-primary" >
                        <div class="panel panel-heading">Update Student</div>
                        <div class="panel panel-body">
                            <form onSubmit={this.handleSubmit} >
                                <strong>Username:</strong><br/>       
                                <select name="username">
                                {this.state.todos.map(item => (
                                    <option value="{item.id}">{item.username}</option>
                                    ))}
                                </select>
                                <br/>
                                <button type="submit" class="btn btn-primary">Update Student</button>
                            </form>
                                
                        </div>
                    </div>
                </div>
            </div>
 
    )     
  }
}

export default DeleteStudent;