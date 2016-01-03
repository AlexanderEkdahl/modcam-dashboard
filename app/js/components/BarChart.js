import React, { Component } from 'react';
import { linear, band } from 'd3-scale';
import { max, range } from 'd3-array';
import Dimensions from 'react-dimensions'
import Radium from 'radium';

class BarChart extends Component {
  render() {
    let props = this.props;

    let width = this.props.containerWidth - props.margins.right - props.margins.left;
    let height = width / 2.25; // Could also be derived from containerHeight

    let rgb = `rgb(${props.red}, ${props.green}, ${props.blue})`

    let yScale = linear()
      .domain([0, max(props.data, d => d.y)])
      .range([height, 0]);

    let xScale = band()
      .domain(props.data.map(d => d.x))
      .rangeRound([0, width])
      .paddingInner(0.3)
      .paddingOuter(0.18);

    let bars = props.data.map((point, i) => {
      return (
        <rect
          height={height - yScale(point.y)}
          y={yScale(point.y)}
          width={xScale.bandwidth()}
          x={xScale(point.x)}
          fill={rgb}
          key={i}
          style={styles.rect} />
      )
    });

    let yAxis = yScale.ticks(6).splice(1).map((tick, i) => {
      if (i % 2) {
        return (
          <g key={i} transform={"translate(0, " + yScale(tick) + ")"}>
            <line x2={width} style={styles.axisYLine}/>
            <text dy=".32em" style={[styles.axisText, styles.axisYText]} x="-10">{tick}</text>
          </g>
        );
      }
      return (
        <line
          key={i}
          x2={width}
          style={[styles.axisYLine, styles.axisYLineOdd]}
          transform={"translate(0, " + yScale(tick) + ")"} />
      );
    });

    let xAxis = props.data.map((tick, i) => {
      return (
        <text
          transform={"translate(" + xScale(tick.x) + ", " + height + ")"}
          dy=".71em"
          y="9"
          x={xScale.bandwidth() / 2}
          style={[styles.axisText, styles.axisXText]}
          key={i}>{tick.x}</text>
      );
    });

    return (
      <svg
        width="100%"
        height={props.margins.top + height + props.margins.bottom}
        className="bar-chart">
        <g transform={"translate(" + props.margins.left + ", " + props.margins.top + ")"}>
          <g className="axis y">{yAxis}</g>
          <g className="axis x">{xAxis}</g>
          <g>{bars}</g>
        </g>
      </svg>
    );
  }
}

var styles = {
  rect: {
    shapeRendering: 'crispEdges',
  },

  axisText: {
    fontSize: 14,
  },

  axisYText: {
    textAnchor: 'end',
  },

  axisXText: {
    textAnchor: 'middle',
  },

  axisYLine: {
    shapeRendering: 'crispEdges',
    stroke: '#ddd',
  },

  axisYLineOdd: {
    stroke: '#eee',
  },
}

export default Dimensions()(Radium(BarChart))
