import React, { Component } from 'react';
import ChartSelectorButton from './ChartSelectorButton';

export default class ChartSelector extends Component {
  render() {
    return (
      <nav>
        {this.props.charts.map((chart, index) =>
          <ChartSelectorButton
            {...chart}
            key={index}
            onClick={() => this.props.onButtonClick(chart.id)} />
        )}
      </nav>
    );
  }
}
