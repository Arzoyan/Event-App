import React from 'react';
import { Link } from "react-router-dom";



let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid ',
  display: 'inline-block',
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <Link to='/app'>
        <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
          onMouseOut={() => { this.setState({ hover: false }) }}
          onMouseOver={() => { this.setState({ hover: true }) }}
        >Application</button></Link>
    );
  }

};


export default Application;
