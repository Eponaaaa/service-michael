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
      currentImage: '',
      imageSet: []
    };
  }

  componentDidMount() {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    fetch(`http://localhost:3000/photos/${getRandomNumber(0, 99)}`)
      .then(response => response.json())
      .then(data => {
        const result = [];
        for (let key in data[0]) {
          if (key.startsWith('url') && data[0][key]) {
            result.push(data[0][key]);
          }
        }
        return result;
      })
      .then(data => {
        this.setState({imageSet: data, currentImage: data[0]});
        return data[0];
      })
      .catch(err => console.log(err));
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