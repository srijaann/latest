import React, { Component } from "react";

const UpdatedComp = OrginalComp => {
  class NewComp extends Component {
    render() {
      return <OrginalComp name="Srijan" />;
    }
  }
  return NewComp;
};

export default UpdatedComp;
