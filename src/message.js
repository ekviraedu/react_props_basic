import React from "react";

export default class Message extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
