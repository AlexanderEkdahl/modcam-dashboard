import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ChartSelectorButton } from './ChartSelectorButton';

export default class ChartSelector extends Component {
  render() {
    return (
      <nav className="chart-selector">
        {this.props.charts.map((chart, index) =>
          <ChartSelectorButton
            {...chart}
            key={index}
            onMouseEnter={() => this.props.onButtonMouseEnter(chart.id)}
            onMouseLeave={() => this.props.onButtonMouseLeave(chart.id)}
            onClick={() => this.props.onButtonClick(chart.id)} />
        )}
      </nav>
    );
  }
}
