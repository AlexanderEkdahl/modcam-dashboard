import React, { Component } from 'react';
import Counter from './Counter';
import Radium from 'radium';

class ChartSelectorButton extends Component {
  getBorderColor(alpha) {
    return `rgba(${this.props.red}, ${this.props.green}, ${this.props.blue}, ${alpha})`;
  }

  getStyles() {
    return {
      base: {
        margin: '6px 12px 6px 6px',
        cursor: 'pointer',
        transition: 'border-color 200ms',
        borderLeftWidth: 4,
        borderLeftStyle: 'solid',
        borderColor: this.getBorderColor(1),
      },

      inactive: {
        borderColor: this.getBorderColor(0),

        ':hover': {
          borderColor: this.getBorderColor(0.5),
        }
      },

      inner: {
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        transition: 'border-color 200ms',
        backgroundColor: '#202021',
        borderColor: this.getBorderColor(0.15),
      },

      innerInactive: {
        borderColor: this.getBorderColor(0),
      },

      innerInactiveHover: {
        borderColor: this.getBorderColor(0.075),
      },

      header: {
        margin: 9,
        color: 'white',
        fontWeight: 100,
        fontSize: 12,
        color: '#FFF',
      },

      counters: {
        display: 'flex',
        alignItems: 'center',
        height: 70,
        marginBottom: 12,
      },

      counter: {
        base: {
          color: '#ABABAB',
          flexGrow: 1,
        },

        span: {
          textAlign: 'center',
          display: 'block',
          fontSize: 10,
        },

        value: {
          fontSize: 20,
        },

        name: {
          textTransform: 'uppercase',
        },
      },
    }
  }

  render() {
    return (
      <section
        onClick={this.props.onClick}
        style={[this.getStyles().base, !this.props.active && this.getStyles().inactive]}
        key="item">
        <div style={[
          this.getStyles().inner,
          !this.props.active && this.getStyles().innerInactive,
          Radium.getState(this.state, 'item', ':hover') && this.getStyles().innerInactiveHover
        ]}>
          <header style={this.getStyles().header}>{this.props.name}</header>
          <div style={this.getStyles().counters}>
            {this.props.counters.map((counter, i) =>
              <Counter {...counter} key={i} styles={this.getStyles().counter} />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Radium(ChartSelectorButton);
