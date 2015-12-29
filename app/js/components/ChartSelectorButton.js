import React, { Component } from 'react';
import { Counter } from './Counter';

export class ChartSelectorButton extends Component {
  render() {
    let props = this.props;
    let alpha = 0;
    if (props.active) {
      alpha = 1;
    } else if (props.hover) {
      alpha = 0.5;
    }

    let colorStyleA = { borderColor: `rgba(${props.red}, ${props.green}, ${props.blue}, ${alpha})`};
    let colorStyleB = { borderColor: `rgba(${props.red}, ${props.green}, ${props.blue}, ${alpha*0.15})`};

    return (
      <section
        className="item"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        style={colorStyleA}>
        <div className="inner" style={colorStyleB}>
          <header>{props.name}</header>
          <div className="counters">
            {props.counters.map((counter, index) =>
              <Counter {...counter} key={index} />
            )}
          </div>
        </div>
      </section>
    )
  }
}
