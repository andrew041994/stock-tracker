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
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUsername(event)}/>
          </label>
          </form>
     </div>
    );
  }
}
