import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartSelector from './ChartSelector';
import Chart from './Chart';
import { hoverChart, unhoverChart, swapChartActive } from '../actions';
import Radium from 'radium';

class App extends Component {
  render() {
    const { dispatch, charts, activeCharts } = this.props;

    return (
      <div style={styles.base}>
        <div style={styles.nav}>
          <ChartSelector
            charts={charts}
            onButtonClick={id =>
              dispatch(swapChartActive(id))
            } />
        </div>
        <div style={styles.content}>
          {activeCharts.map(function(chart, i) {
            return <Chart {...chart} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },

  nav: {
    backgroundColor: '#1A1A1C',
    minWidth: 244,
    userSelect: 'none',
  },

  content: {
    flexGrow: 1,
  },
};

function select(state) {
  return {
    charts: state,
    activeCharts: state.filter(chart => chart.active),
  };
}

export default connect(select)(Radium(App));
