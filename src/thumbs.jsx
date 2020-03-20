/*
thumbs are 56x56px w/ border radius ~5px
hovering over thumb puts a 2px black border and changes the image to the active in carosel
unselected thumbs have a white opaque overlay to fade it slightly
thumbs are aligned vertically along left side of screen, non-responsive
*/

import React from 'react';
import './styles/styles.css';

class Thumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  handleThumbMouseOver(i) {
    this.props.setCurrentImage(i);
  }

  render() {
    return (
      <ul className = "thumbnails">
        {
          this.props.imageSet.map((thumb, i) => {
            return (
              <li key={i} onMouseOver={this.handleThumbMouseOver.bind(this, i)}><img src={this.props.BASE_URL + thumb} alt={thumb} /></li>
            );
          })
        }
      </ul>
    );
  }
}

export default Thumbs;