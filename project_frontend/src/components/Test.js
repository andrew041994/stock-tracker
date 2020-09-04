import React, { Component } from 'react';

export default class test extends Component {

handleClick = (e) => {
    e.preventDefault()
    
}


  render() {
    return (
      <div style={{"margin": "auto",
      "width": "20%",
      "padding": "10px",
      "color": "white"}}> 
          
          <button onClick={(e) => this.handleClick(e)}> press here for action</button>
          <form>
            <div>

          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUsername(event)}/>
          </label>
            </div>
          <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassword(event)} />
          </label>
        </div>
          </form>
     </div>
    );
  }
}
