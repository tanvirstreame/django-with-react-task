import React, { Component } from 'react';
import logo from './assets/pic.png'

function SearchingEmployee(term){
  return function(x){
    return x.gender.toLowerCase().includes(term.toLowerCase())|| !term;
  }

}

class FilterGender extends Component {
  constructor(props){
    super(props);
    this.state = {
    todos: [],
    term:'',
  };
  this.searchHandler=this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({term:event.target.value});
  }
  

  handleSelectValue() {
  if (this.refs.gender) {
    return(this.refs.gender.value);
  }
}
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

    handleClick = userId => {
    
  }



  render() {
    const {todos,term} =this.state;

    return (
      <div className='container'>
        <br/>
        <br/>
        <select className="form-control" onChange={this.searchHandler} ref="gender" name="gender" >
          <option value="" disabled selected>Select your option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br/>
        <br/>
       <div className="row">
            {todos.filter(SearchingEmployee(term)).map(item => (
              <div className="card">
                <div className="card-body">
                  <div key={item.id}>
                    <h4 className="text-center">{item.id}</h4>
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
            ))}
        </div>
      </div>
    );
  }
}

export default FilterGender ;
