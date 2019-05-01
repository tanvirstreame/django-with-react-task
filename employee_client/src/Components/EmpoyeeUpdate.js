import React, { Component } from 'react';
import './App.css';
import axios from './axioshandaler'
import queryString from 'query-string';

class EmpoyeeUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName= this.onChangeUserName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangecountry = this.onChangecountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 this.state = {
    todos: [],
    Username: '',
    Surname: '',
    City:'',
    country:'',
  };
}
  componentDidMount() {
  const values = queryString.parse(this.props.location.search)
  console.log(values.id) // "top"
  console.log(values.origin) // "im"
}


  async componentDidMount() {
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

  onChangeUserName(e) {
    this.setState({
      Username: e.target.value
    });
  }
  onChangeSurname(e) {
    this.setState({
      Surname: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      City: e.target.value
    });
  }
  onChangecountry(e) {
    this.setState({
      country: e.target.value
    });
  }
   
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Username: this.state.Username,
      Surname: this.state.Surname,
      City: this.state.City,
      country: this.state.country,
    };
    axios.post("http://127.0.0.1:8000/api/v1/Studentdetail/"+this.props.match.params.id+"/", obj)
        .then(res => console.log(res.data));
    
    // this.props.history.push('/index');
  }

  render() {console.log(this.props.match);
    return (

      <div class="card">
            <div class="card-body">
                <div class="panel panel-primary">
                    <div class="panel panel-heading">Update Student</div>
                    <div class="panel panel-body">
                    {this.state.todos.map(item => (
                        <form onSubmit={this.onSubmit} method="post">
                            <strong>Username:</strong> <br /> <input type="text" onChange={this.onChangeUserName} name="username" value={item.username} /> <br />
                            <strong>Surname</strong> <br /> <input type="text" onChange={this.onChangeSurname} ref={el => this.Surname = el} name="surname" value={item.surname} /> <br />
                            <strong>Gender</strong><br/>
                            <select name="gender">
                            <option value="" disabled selected>Select your option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> <br />
                            <strong>City</strong> <br />  <input type="text" onChange={this.onChangeCity} ref={el => this.City = el} name="city" value={item.city} /> <br />
                            <strong>Country</strong> <br /> <input type="text" onChange={this.onChangecountry} ref={el => this.Country = el} name="country" value={item.country} /> <br /><br />
                            <button type="submit" class="btn btn-primary">Update Student</button>
                        </form>
                         ))}
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
export default EmpoyeeUpdate;