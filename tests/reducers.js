import expect from 'expect';
import reducer from '../app/js/reducer';

describe('reducer', () => {
  it('should handle the SWAP_CHART_ACTIVE action', () => {
    const id = 1

    expect(
      reducer(
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
      reducer(
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
      reducer(
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
      reducer(
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
