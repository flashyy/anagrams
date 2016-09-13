"use strict";
let {change} =
require('../main/main');

describe('全排列', ()=> {
    it('交换两个字母', () => {
        let letter = 'bior';

        let result = change(letter,0,1);

        let expected = ['i','b','o','r'];

        expect(result).toEqual(expected);

    });
});