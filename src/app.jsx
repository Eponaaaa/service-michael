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

    // this.setCurrentImage.bind(this);
    // this.nextImage.bind(this);
    // this.prevImage.bind(this);
  }

  componentDidMount() {
    //query database for current id and load into state
    this.setState({imageSet: ['image-adamvalstar-Pkfckiu3RKc.jpg', 'image-aleskrivec-QnNqGoCnBg0.jpg', 'image-veerajayanth03-hJnNmgOOuI4.jpg']});
  }

  setCurrentImage(imgIndex) {
    this.setState({currentImage: this.state.imageSet[imgIndex]});
  }

  nextImage() {
    console.log(this.state.imageSet.indexOf(this.state.currentImage));

    this.currentImgIndex = this.state.imageSet.indexOf(this.state.currentImage);
    //error handling
    if (this.currentImgIndex === -1) {
      this.setState({currentImage: this.state.imageSet[0]});
      console.log('An Error occured getting the next image');
    }

    if (this.currentImgIndex === this.state.imageSet.length) {
      this.setState({currentImage: this.state.imageSet[0]});
    } else {
      this.setState({currentImage: this.state.imageSet[this.currentImageIndex + 1]});
    }
  }

  prevImage() {

  }

  render() {
    return (
      <div id="carousel-container">

        <Thumbs BASE_URL = {this.BASE_URL} imageSet={this.state.imageSet} setCurrentImage={(imgIndex) => this.setCurrentImage(imgIndex)} />
        <Carousel BASE_URL = {this.BASE_URL} currentImage={this.state.currentImage} next={this.nextImage.bind(this)}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));