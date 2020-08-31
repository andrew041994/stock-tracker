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
     </div>
    );
  }
}
