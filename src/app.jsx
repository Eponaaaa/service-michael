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
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    
    this.setState({imageSet: ['image-adamvalstar-Pkfckiu3RKc.jpg', 'image-aleskrivec-QnNqGoCnBg0.jpg', 'image-veerajayanth03-hJnNmgOOuI4.jpg']});
  }

  setCurrentImage(imgIndex) {
    this.setState({currentImage: this.state.imageSet[imgIndex]});
  }

  render() {
    return (
      <div id="carousel-container">

        <Thumbs BASE_URL = {this.BASE_URL} imageSet={this.state.imageSet} setCurrentImage={(imgIndex) => this.setCurrentImage(imgIndex)} />
        <Carousel BASE_URL = {this.BASE_URL} currentImage={this.state.currentImage} images={this.state.imageSet} setCurrentImage={(imgIndex) => this.setCurrentImage(imgIndex)} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));