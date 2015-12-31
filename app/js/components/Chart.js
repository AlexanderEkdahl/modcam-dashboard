import React, { Component } from 'react';
import BarChart from './BarChart';
import Counter from './Counter';
import Heatmap from './Heatmap';

export default class Chart extends Component {
  render() {
    let chart;

    if (this.props.chart_type == "barchart") {
      chart = (
        <BarChart
          {...this.props}
          margins={{top: 40, left: 40, bottom: 40, right: 40}}
        />
      );
    } else {
      chart = (
        <div style={{margin: 25}}>
          <Heatmap
            dimensionX={this.props.dimension_x}
            dimensionY={this.props.dimension_y}
            image={this.props.image}
            data={this.props.data}/>
        </div>
      )
    }

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
        {chart}
      </section>
    )
  }
}
