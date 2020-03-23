import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('Basic Check', () => {
  expect(2 + 2).toBe(4);
});

//notes
//.toBe for primitive
//.toEqual for objects
//for async: expect.assertions(#) and return the test