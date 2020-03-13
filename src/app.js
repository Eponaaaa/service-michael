import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <h1>test</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));