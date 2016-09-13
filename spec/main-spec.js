"use strict";
let {change, division} =
    require('../main/main');

describe('全排列', ()=> {
    it('交换两个字母', () => {
        let letter = 'bior';

        let result = change(letter, 0, 1);

        let expected = ['i', 'b', 'o', 'r'];

        expect(result).toEqual(expected);

    });
    it('division', () => {
        let letter = 'bior';

        let result = division(letter);

        let expected = ['b','i','o','r'];

        expect(result).toEqual(expected);
    });
});