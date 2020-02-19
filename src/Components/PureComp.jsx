import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
      console.log("PureComps")
    return <div>I m the pure component {this.props.name}</div>;
  }
}

export default PureComp;
