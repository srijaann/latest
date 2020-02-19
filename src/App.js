import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Handlerevent from "./Components/Handlerevent";
// import LIst from "./LIst";
import Update from "./Components/Update";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParComp from "./Components/ParComp";
import Subscribe from "./Components/Subscribe";
import Rhooks from './Components/RHooks';

function App() {
  // const names = ["srijan", "aryal", "anik", "eklavya"];
  return (
    <div className="App">
      <Form></Form>
      <Handlerevent></Handlerevent>
      <Update></Update>
      <Click></Click>
      <Counter />
      <ParComp />
      <Subscribe />
      {/* <h1>{this.props.car}</h1>
      <h2>{this.props.bike}</h2> */}
    <Rhooks></Rhooks>
    </div>
  );
}

export default App;
