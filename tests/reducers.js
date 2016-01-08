import expect from 'expect';
import reducer from '../app/js/reducer';

describe('reducer', () => {
  it('should handle the SWAP_CHART_ACTIVE action', () => {
    const id = 1;

    expect(
      reducer(
        [
          {
            id: 1,
            name: 'Skybar Väst',
            active: false,
          },
        ],
        {
          type: 'SWAP_CHART_ACTIVE',
          id,
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'Skybar Väst',
          active: true,
        },
      ]
    );

    expect(
      reducer(
        [
          {
            id: 1,
            name: 'Skybar Väst',
            active: true,
          },
        ],
        {
          type: 'SWAP_CHART_ACTIVE',
          id,
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'Skybar Väst',
          active: false,
        },
      ]
    );
  });
});
