/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartSelector from './ChartSelector';
import Chart from './Chart';
import { hoverChart, unhoverChart, swapChartActive } from '../actions'

function App(props) {
  const { dispatch, charts, activeCharts } = props;

  return (
    <div className="app">
      <div className="nav">
        <ChartSelector
          charts={charts}
          onButtonMouseEnter={id =>
            dispatch(hoverChart(id))
          }
          onButtonMouseLeave={id =>
            dispatch(unhoverChart(id))
          }
          onButtonClick={id =>
            dispatch(swapChartActive(id))
          } />
      </div>
      <div className="content">
        {activeCharts.map(function(chart, i) {
          return <Chart {...chart} key={i} />;
        })}
      </div>
    </div>
  );
}

function select(state) {
  return {
    charts: state,
    activeCharts: state.filter(chart => chart.active),
  };
}

export default connect(select)(App);
