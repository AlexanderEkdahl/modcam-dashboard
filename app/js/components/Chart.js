import React, { Component } from 'react';
import BarChart from './BarChart';
import { Counter } from './Counter';

export default class Chart extends Component {
  render() {
    return (
      <section className="chart" ref="chart">
        <header>
          <span className="super">Today</span>
          <span className="title">{this.props.name}</span>
          <span className="sub">Visitors per hour</span>
          <div className="right">
            {this.props.counters.map((counter, i) =>
              <Counter {...counter} key={i} />
            )}
          </div>
        </header>
        <BarChart
          {...this.props}
          margins={{top: 40, left: 40, bottom: 40, right: 40}}
        />
      </section>
    )
  }
}
