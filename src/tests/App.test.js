import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow(<App />);

describe('App Module Tests', () => {

  test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('State property imageSet is an array', () => {
    expect(Array.isArray(wrapper.state().imageSet)).toEqual(true);
  });

  test('State property imageSet is a string', () => {
    expect(typeof wrapper.state().currentImage).toBe('string');
  });

  test('Current image property is not storing a full URL', () => {
    expect(wrapper.state().currentImage.startsWith('http')).toEqual(false);
  });

  test('setCurrentImage changes the currentImage state property', () => {
 
  });
} );


//notes
//.toBe for primitive
//.toEqual for objects
//for async: expect.assertions(#) and return the test