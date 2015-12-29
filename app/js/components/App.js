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
import { hoverChart, unhoverChart, swapChartActive } from '../actions'

function App(props) {
  const { dispatch, charts } = props;

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
      </div>
    </div>
  );
}

function select(state) {
  return {
    charts: state
  };
}

export default connect(select)(App);
