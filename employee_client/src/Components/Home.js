import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className="card">
            <div className="card-body"> 
              <h4>Task</h4>
              <ul>
                <li><a href="/Get">View All(Card View)</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/update">Update</a></li>
                <li><a href="/delete">Delete</a></li>
                <li><a href="/filter">Filter</a></li>
             </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
