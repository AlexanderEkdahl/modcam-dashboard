import React, { Component } from 'react';
import Radium from 'radium';

class Counter extends Component {
  render() {
    const styles = this.props.styles;
    return (
      <div style={styles.base}>
        <span style={[styles.span, styles.value]}>{this.props.value}</span>
        <span style={[styles.span, styles.sub]}>{this.props.sub}</span>
        <span style={[styles.span, styles.name]}>{this.props.name}</span>
      </div>
    );
  }
}

export default Radium(Counter);
