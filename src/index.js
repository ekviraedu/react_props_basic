import React from "react";
import ReactDOM from "react-dom";

function BasicPropsDemo(props) {
  return <h2>This is a {props.varName}!</h2>;
}

const myPropsElement = <BasicPropsDemo varName="ReactPropsDemo" />;

function InnerFunctionComponent(props) {
  return <h2>This is {props.varName}</h2>;
}

function OuterFunctionComponent() {
  return (
    <>
      <h1>This is Outer Function Component</h1>
      <InnerFunctionComponent varName="ReactPropsDemoInnerFunction" />
    </>
  );
}

function OuterFunctionComponent2() {
  const demoVar = "QWERTY";
  return (
    <>
      <h1>This is Outer Function Component 2</h1>
      <InnerFunctionComponent varName={demoVar} />
    </>
  );
}

function InnerFunctionComponent2(props) {
  return (
    <>
      <h2>This is {props.varName.elemOne}</h2>
      <h3>This is {props.varName.elemTwo}</h3>
      <h4>This is {props.varName.elemThree}</h4>
    </>
  );
}

function OuterFunctionComponent3() {
  const info = { elemOne: "Apple", elemTwo: "Banana", elemThree: "Coconut" };

  return (
    <>
      <h1>This is Outer Function Component 2</h1>
      <InnerFunctionComponent2 varName={info} />
    </>
  );
}

ReactDOM.render(<OuterFunctionComponent3 />, document.getElementById("root"));
