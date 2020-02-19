import React, { Component } from "react";
import UpdatedComp from "./HOC";
class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  updateButuon = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateButuon}>
          {this.props.name} Click {count} times{" "}
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Click);
