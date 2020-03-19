import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

//import components
import Thumbs from './Thumbs.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.BASE_URL = 'https://hrr44fec.s3.us-east-2.amazonaws.com/';

    this.state = {
      currentImage: 'image-adamvalstar-Pkfckiu3RKc.jpg',
      imageSet: []
    };
  }

  componentDidMount() {
    //query database for current id and load into state
    this.setState({imageSet: ['image-adamvalstar-Pkfckiu3RKc.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg']});
  }

  //fn to change state

  render() {
    return (
      <div id="carousel-container">

        <Thumbs BASE_URL = {this.BASE_URL} imageSet={this.state.imageSet}/>
        <Carousel BASE_URL = {this.BASE_URL} currentImage={this.state.currentImage}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));