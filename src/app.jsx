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

    this.setCurrentImage.bind(this);
  }

  componentDidMount() {
    //query database for current id and load into state
    this.setState({imageSet: ['image-adamvalstar-Pkfckiu3RKc.jpg', 'image-aleskrivec-QnNqGoCnBg0.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg', 'image-adamvalstar-Pkfckiu3RKc.jpg', 'image-aleskrivec-QnNqGoCnBg0.jpg']});
  }

  setCurrentImage(imgIndex) {
    this.setState({currentImage: this.state.imageSet[imgIndex]});
  }

  render() {
    return (
      <div id="carousel-container">

        <Thumbs BASE_URL = {this.BASE_URL} imageSet={this.state.imageSet} setCurrentImage={(imgIndex) => this.setCurrentImage(imgIndex)}/>
        <Carousel BASE_URL = {this.BASE_URL} currentImage={this.state.currentImage}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));