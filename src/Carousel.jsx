/*
heart icon in upper right corner to favorite- clicking fills in color
below heart icon is expand image icon. containers for both are 36x36
clicking on the image brings it out into a light box
next/prev buttons are on far left & right side of image, vertically centered
  circular white buttons with a drop shadow, arrows are black single chevrons (svg can be downloaded from etsy)
  chevron box is 24x24px, button is 48x48
  drop shadow slightly darkens on hover
main image ~ 625px wide
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
  }

  favoriteImage() {
    if (this.state.favorite) {
      document.getElementById('fav-heart-icon').setAttribute('style', 'display: none;');
      this.setState({favorite: false});
    } else {
      document.getElementById('fav-heart-icon').setAttribute('style', 'display: block;');
      this.setState({favorite: true});
    }
  }

  render() {
    return (
      <div id="carousel">
        <img src={this.props.BASE_URL + this.props.currentImage} alt="" />
        
        <button className="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg></button>
        
        <button className="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" onClick={this.props.next.bind(this)}><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg></button>

        <span id="heart-icon" onClick={this.favoriteImage.bind(this)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg></span>

        <span id="fav-heart-icon" onClick={this.favoriteImage.bind(this)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg></span>
      </div>
    );
  }
}

export default Carousel;