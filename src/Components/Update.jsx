import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to React App"
    };
    this.updateComp = this.updateComp.bind(this);
  }
  updateComp() {
    this.setState({ message: "Button click" });
  }
  render() {
    return (
      <div>
        <Simple></Simple>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateComp}>Click Here !!</button>
      </div>
    );
  }
}

class Simple extends Component {
  render() {
    return (
      <div>
        <h2>Helloe</h2>
      </div>
    );
  }
}
