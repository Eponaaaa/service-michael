import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

//import components
import Thumbs from './Thumbs.jsx';
import Carosel from './Carosel.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <Thumbs />
        <Carosel />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));