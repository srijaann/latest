import React, { Component } from "react";

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Subscribe",
      sub: "Subscribe",
      img: "Bell"
    };
  }

  Update = () => {
    this.setState({
      message: "hit the bell icon to never miss the the update",
      sub: "Subscribed"
    });
  };
  bell = () => {
    this.setState({
      message: "You will be notified everytime "
      
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Update}>{this.state.sub}</button><br/>
        <i class="fa fa-bell" aria-hidden="true" onClick={this.bell}></i>
      </div>
    );
  }
}
