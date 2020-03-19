import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

//import components
import Thumbs from './Thumbs.jsx';
import Carosel from './Carosel.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.BASE_URL = 'https://hrr44fec.s3.us-east-2.amazonaws.com/';

    this.state = {
      currentImage: 'image-adamvalstar-Pkfckiu3RKc.jpg'
    };
  }

  //fn to change state

  render() {
    return (
      <div id="container">

        <Thumbs BASE_URL = {this.BASE_URL}/>
        <Carosel BASE_URL = {this.BASE_URL} currentImage={this.state.currentImage}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));