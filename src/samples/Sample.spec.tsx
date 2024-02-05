import { act, fireEvent, render, screen } from '@testing-library/react';
import { getTableValues } from '../test-utils';
import SecondSample from './Sample';

describe('AssetList should', () => {
    it('render asset list', async () => {
        // given

        // when
        await act(async () => {
            render(<SecondSample />);
        });

        // then
        act(() => {
            const result = getTableValues('Test-table', screen);
            const expectedResult = [[
                "Monty Python's Flying Circus",
                '1969',
                '8.8',
                '4',
                'Comedy',
                'GB'
            ], [

                "Star Trek: Deep Space Nine",
                '1993',
                '6.9',
                '7',
                'Science-Fiction',
                'US'
            ]]

            expect(result).toEqual(expectedResult);
        });
    });

});
