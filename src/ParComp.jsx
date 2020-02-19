import React, { Component } from "react";
import PureComp from "./Components/PureComp";
import RegComp from "./RegComp";
class ParComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Srijan"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Aryal"
      });
    }, 3000);
  }

  render() {
      console.log("Parent")
    return (
      <div>
        I m the parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParComp;
