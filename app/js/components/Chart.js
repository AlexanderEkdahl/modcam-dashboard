import React, { Component } from 'react';
import BarChart from './BarChart';
import Counter from './Counter';
import Heatmap from './Heatmap';
import Radium from 'radium';

class Chart extends Component {
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
      <section style={styles.base} ref="chart">
        <header style={styles.header}>
          <span style={[styles.span, styles.super]}>Today</span>
          <span style={[styles.span, styles.title]}>{this.props.name}</span>
          <span>Visitors per hour</span>
          <div style={styles.right}>
            {this.props.counters.map((counter, i) =>
              <Counter {...counter} key={i} styles={styles.counter}/>
            )}
          </div>
        </header>
        {chart}
      </section>
    )
  }
}

var styles = {
  base: {
    backgroundColor: 'white',
    padding: 16,
    margin: 6,
  },

  header: {
    textAlign: 'center',
    position: 'relative',
  },

  span: {
    display: 'block',
  },

  super: {
    color: '#ABABAB',
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
  },

  title: {
    fontWeight: 600,
    fontSize: 18,
  },

  right: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  counter: {
    base: {
      float: 'left',
      marginLeft: 20,
    },

    span: {
      display: 'block',
      color: '#676767',
      fontSize: 10,
    },

    value: {
      fontSize: 19,
    },

    sub: {
      fontWeight: 500,
    },

    name: {
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
}

export default Radium(Chart);
