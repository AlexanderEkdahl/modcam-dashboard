import { range } from 'd3-array';
import { normal } from 'd3-random';
import { format } from 'd3-format';
import Floor from '../images/floor.png';
import HeatmapData from './data';

// TODO: Move D3 formatting to the views
const initialState = [
  {
    id: 1,
    name: 'West Wing',
    active: false,
    hover: false,
    red: 1,
    green: 253,
    blue: 255,
    chart_type: 'barchart',
    counters: [
      {
        name: 'Today',
        value: format(',.0f')(normal(20, 4)()),
      },
      {
        name: 'Week',
        value: format(',.0f')(normal(160, 20)()),
      },
      {
        name: 'Month',
        value: format(',.0f')(normal(1000, 100)()),
      },
    ],
    data: range(8).map(d => {
      return {
        x: d + 6,
        y: Math.abs(normal(100, 200)()),
      };
    }),
  },
  {
    id: 2,
    name: 'East Wing',
    active: false,
    hover: false,
    red: 8,
    green: 249,
    blue: 130,
    chart_type: 'barchart',
    counters: [
      {
        name: 'Today',
        value: format(',.0f')(normal(13, 4)()),
      },
      {
        name: 'Week',
        value: format(',.0f')(normal(140, 20)()),
      },
      {
        name: 'Month',
        value: format(',.0f')(normal(500, 100)()),
      },
    ],
    data: range(8).map(d => {
      return {
        x: d + 6,
        y: Math.abs(normal(100, 200)()),
      };
    }),
  },
  {
    id: 3,
    name: 'Palais Lanckoroński',
    active: false,
    hover: false,
    red: 255,
    green: 130,
    blue: 0,
    chart_type: 'heatmap',
    counters: [
      {
        name: 'Yesterday',
        value: format('+.0%')(normal(0, 0.03)()),
        sub: 'vs',
      },
      {
        name: 'Last monday',
        value: format('+.0%')(normal(0.04, 0.02)()),
        sub: 'vs',
      },
    ],
    data: HeatmapData,
    image: Floor,
    dimension_x: 1000,
    dimension_y: 600,
  },
];

function reducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'SWAP_CHART_ACTIVE':
      return state.map((chart) => {
        return chart.id === action.id ? Object.assign({}, chart, { active: !chart.active}) : chart;
      });
    default:
      return state;
  }
}

export default reducer;
