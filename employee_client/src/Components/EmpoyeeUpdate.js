import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
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

    // componentDidMount() {
    //   axios.get('http://127.0.0.1:8000/api/v1/Studentdetail/'+this.props.match.params.id)
    //       .then(response => {
    //           this.setState({ 
    //             Username: response.data.Username, 
    //             Surname: response.data.Surname,
    //             City: response.data.City,
    //             country: response.data.country,
              
    //           });
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       })
    // }

 

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
  getUserNameValue() {
    if (this.refs.username) {
      return(this.refs.username.value);
      }
  }
  
  
   
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id:this.props.match.params.id,
      gender:"Male",
      city: this.state.City,
      first_name: "data",
      surname:this.state.Surname,
      username: this.state.Username,
      age: '0',
      image_thumb: "null",
      country: this.state.country,
     
    };
    axios.put("http://127.0.0.1:8000/api/v1/Studentdetail/"+this.props.match.params.id+"/", obj)
        .then(res => console.log(res.data));
    
    // this.props.history.push('/');
  }

  render() {console.log(this.props.match);
    return (

      <div class="card">
            <div className="card-body">
                <div className="panel panel-primary">
                    <div className="panel panel-heading">Update Student</div>
                    <div className="panel panel-body">
                    {this.state.todos.map(item => (
                        <form onSubmit={this.onSubmit}>
                            <strong>Username:</strong> <br /> <input type="text" onChange={this.onChangeUserName} ref={el => this.username = el} name="username" defaultValue={item.username} /> <br />
                            <strong>Surname</strong> <br /> <input type="text" onChange={this.onChangeSurname} ref={el => this.Surname = el} name="surname" defaultValue={item.surname} /> <br />
                            <strong>Gender</strong><br/>
                            <select name="gender">
                            <option value="" disabled selected>Select your option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> <br />
                            <strong>City</strong> <br />  <input type="text" onChange={this.onChangeCity} ref={el => this.City = el} name="city" defaultValue={item.city} /> <br />
                            <strong>Country</strong> <br /> <input type="text" onChange={this.onChangecountry} ref={el => this.Country = el} name="country" defaultValue={item.country} /> <br /><br />
                            <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Update Student</button>
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