import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
class EmployeeDelete extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  handleSelectValue() {
  if (this.refs.username) {
    return(this.refs.username.value);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    axios.delete("http://127.0.0.1:8000/api/v1/Studentdetail/"+this.handleSelectValue()+"/")
        .then(res =>  this.componentDidMount());
        
    // this.props.history.push('/');
  }


  // handleClick = userId => {
  // const requestOptions = {
  //   method: 'DELETE'
  // };
  

  // fetch("http://localhost:8000/api/v1/Studentdetail/" + this.handleSelectValue(), requestOptions).then((response) => {
  //   return "ok";
    
  //   }).then((result) => {
  //     // do what you want with the response here
  //   });
  // }

  render(){
    return (
            <div className="card">
                <div className="card-body">
                    <div className="panel panel-primary" >
                        <div className="panel panel-heading">Delete Student</div>
                        <div className="panel panel-body">
                        <form onSubmit={this.onSubmit} method="POST"> 
                          <strong>Username:</strong>
                          <br/>       
                          <select name="username" ref="username">
                          {this.state.todos.map(item => (
                              <option value={item.id}>{item.username}</option>
                              ))}
                          </select>
                          <br/>
                          <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
    )     
  }
}

export default EmployeeDelete;