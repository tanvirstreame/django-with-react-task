import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';
class EmployeeInfo extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log(values.id) // "top"
    console.log(values.origin) // "im"
    // console.log(this.props.match.params.id);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/Studentdetail/" + this.props.match.params.id,);
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
   
  render(){
    return (
      <div className='container'>
        <div className="row">
              {this.state.todos.map(item => (
                <div className="card">
                  <div className="card-body">
                     <div key={item.id}>
                       <h4 className="text-center">EmployeeInfo</h4>
                       <label><b>Employee Id:</b></label>
                       <span >{item.id}</span>
                       <br/>
                       <label><b>User Name:</b></label>
                       <span >{item.username}</span>
                       <br/>
                       <label><b>Gender:</b></label>
                       <span className="text-center">{item.gender}</span>
                       <br/>
                       <label><b>City:</b></label>
                       <span>{item.city}</span>
                       <br/>
                       <label><b>Country:</b></label>
                       <span>{item.country}</span>
                     </div>
                  </div> 
               </div>
              ))}
        </div>
      </div>
    );
  }
}

export default EmployeeInfo ;
