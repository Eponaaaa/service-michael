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