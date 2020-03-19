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

class Carosel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="carosel">
        <img src={this.props.BASE_URL + this.props.currentImage} alt="" />
      </div>
    );
  }
}

export default Carosel;