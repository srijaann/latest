import React, { Component } from "react";

export default class Form extends Component {
  state = {};
  handlechange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name entered was: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.value}
            onChange={this.handlechange.bind(this)}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
