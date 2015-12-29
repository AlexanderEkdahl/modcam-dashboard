import expect from 'expect';
import homeReducer from '../app/js/reducers/homeReducer';
import chartReducer from '../app/js/reducers/chartReducer';

// Test Reducer
describe('defaultReducer', () => {
  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      projectName: 'React.js Boilerplate',
      ownerName: 'mxstbr'
    });
  });

  // Test that it handles changing the owner correctly
  it('should handle the CHANGE_OWNER_NAME action', () => {
    const name = 'samsmith';

    expect(
      homeReducer({}, {
        type: 'CHANGE_OWNER_NAME',
        name
      })
    ).toEqual({
      ownerName: name
    });
  });

  // Test that it handles changing the project name correctly
  it('should handle the CHANGE_PROJECT_NAME action', () => {
    const name = 'Webapplication Boilerplate';

    expect(
      homeReducer({}, {
        type: 'CHANGE_PROJECT_NAME',
        name
      })
    ).toEqual({
      projectName: name
    });
  });
});

describe('chartReducer', () => {
  it('should handle the SWAP_CHART_ACTIVE action', () => {
    const id = 1

    expect(
      chartReducer(
        [
          {
            id: 1,
            name: "Skybar Väst",
            active: false
          }
        ],
        {
          type: 'SWAP_CHART_ACTIVE',
          id
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: "Skybar Väst",
          active: true
        }
      ]
    );

    expect(
      chartReducer(
        [
          {
            id: 1,
            name: "Skybar Väst",
            active: true
          }
        ],
        {
          type: 'SWAP_CHART_ACTIVE',
          id
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: "Skybar Väst",
          active: false
        }
      ]
    );
  });

  it('should handle the HOVER_CHART action', () => {
    const id = 4

    expect(
      chartReducer(
        [
          {
            id: id,
            hover: false
          }
        ],
        {
          type: 'HOVER_CHART',
          id
        }
      )
    ).toEqual(
      [
        {
          id: id,
          hover: true
        }
      ]
    );
  });

  it('should handle the UNHOVER_CHART action', () => {
    const id = 42

    expect(
      chartReducer(
        [
          {
            id: id,
            name: "Test",
            hover: true
          }
        ],
        {
          type: 'UNHOVER_CHART',
          id
        }
      )
    ).toEqual(
      [
        {
          id: id,
          name: "Test",
          hover: false
        }
      ]
    );
  });
});
