import React, { Component } from 'react';
import './App.css';
import axios from './axioshandaler';


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
  
    (async () => {
      const rawResponse = await fetch('http://127.0.0.1:8000/api/v1/Studentdetail/4', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ a: 1, b: 'Textual content' })
      });
      const content = await rawResponse.json();

      console.log(content);
    })();

  // axios.get(`http://localhost:8000/api/v1/Studentdetail/4`,{
  //     // mode: 'no-cors',
     
  //   })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  }

  render() {
    return (
            <div className="card">
                <div className="card-body">
                    <div className="panel panel-primary" >
                        <div className="panel panel-heading">Update Student</div>
                        <div className="panel panel-body">
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