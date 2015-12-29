import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span className="value">{this.props.value}</span>
        <span className="vs">{this.props.vs}</span>
        <span className="name">{this.props.name}</span>
      </div>
    );
  }
}
