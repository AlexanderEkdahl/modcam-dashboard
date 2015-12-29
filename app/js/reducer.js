const initialState = [
  {
    id: 1,
    name: "Skybar Väst",
    active: false,
    hover: false,
    red: 1,
    green: 253,
    blue: 255,
    counters: [
      {
        name: "Today",
        value: 16
      },
      {
        name: "Week",
        value: 154
      },
      {
        name: "Month",
        value: 876
      }
    ]
  },
  {
    id: 2,
    name: "Skybar Öst",
    active: false,
    hover: false,
    red: 8,
    green: 249,
    blue: 130,
    counters: [
      {
        name: "Today",
        value: 13
      },
      {
        name: "Week",
        value: 145
      },
      {
        name: "Month",
        value: 452
      }
    ]
  },
  {
    id: 3,
    name: "Malmö Floor",
    active: false,
    hover: false,
    red: 255,
    green: 130,
    blue: 0,
    counters: [
      {
        name: "Yesterday",
        value: "+3%",
        vs: "vs"
      },
      {
        name: "Last monday",
        value: "+5%",
        vs: "vs"
      }
    ]
  }
];

function reducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'SWAP_CHART_ACTIVE':
      return state.map((chart) => {
        return chart.id === action.id ? Object.assign({}, chart, { active: !chart.active}) : chart
      })
    case 'HOVER_CHART':
      return state.map((chart) => {
        return chart.id === action.id ? Object.assign({}, chart, { hover: true }) : chart
      })
    case 'UNHOVER_CHART':
      return state.map((chart) => {
        return chart.id === action.id ? Object.assign({}, chart, { hover: false }) : chart
      })
    default:
      return state;
  }
}

export default reducer;
