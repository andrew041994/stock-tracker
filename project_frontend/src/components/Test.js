import React, { Component } from 'react';

export default class test extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
      this.setState({
        password: event.target.value
      })
    }

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
        <div>
          <button type="submit">Log in</button>
        </div>
          </form>
     </div>
    );
  }
}
