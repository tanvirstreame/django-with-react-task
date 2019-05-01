import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	'max-width': '80%',
	margin: '0 auto'
}
class EmployeeCreate extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:8000/api/v1/all', {
      method: 'POST',
      body: data,
    });
     this.Username.value ='';
     this.Surname.value = '';
     this.City.value = '';
     this.Country.value = '';
  }

  render() {
    return(
        <div class="card">
            <div class="card-body">
                <div class="panel panel-primary" style={panelStyle}>
                    <div class="panel panel-heading">Create Student</div>
                    <div class="panel panel-body">
                        <form onSubmit={this.handleSubmit} method="post">
                            <strong>Username:</strong> <br /> <input type="text" ref={el => this.Username = el} name="username" /> <br />
                            <strong>Surname</strong> <br /> <input type="text" ref={el => this.Surname = el} name="surname"  /> <br />
                            <strong>Gender</strong><br/>
                            <select name="gender">
                            <option value="" disabled selected>Select your option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> <br />
                            <strong>City</strong> <br />  <input type="text" ref={el => this.City = el} name="city"  /> <br />
                            <strong>Country</strong> <br /> <input type="text" ref={el => this.Country = el} name="country"  /> <br /><br />
                            <button type="submit" class="btn btn-primary">Create Student</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  inputChangeHandler(e) {
   let formFields = {...this.state.formFields};
   formFields[e.target.name] = e.target.value;
   this.setState({
    formFields
   });
  }

  formHandler(formFields) {
   axios.post('/api/register', formFields)
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }
}

export default EmployeeCreate 