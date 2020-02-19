import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg");
    return <div>I m the regular componnet {this.props.name}</div>;
  }
}

export default RegComp;
