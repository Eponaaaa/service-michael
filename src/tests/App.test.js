import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import App from '../App';

describe('Some Cool Name', () => {
  it('should be 4', expect(2 + 2).toBe(4));

  test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

} );


//notes
//.toBe for primitive
//.toEqual for objects
//for async: expect.assertions(#) and return the test