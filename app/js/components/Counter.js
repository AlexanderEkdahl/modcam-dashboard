import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span className="value">{this.props.value}</span>
        <span className="sub">{this.props.sub}</span>
        <span className="name">{this.props.name}</span>
      </div>
    );
  }
}
