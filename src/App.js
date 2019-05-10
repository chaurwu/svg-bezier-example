import React, { Component } from 'react';
import Bezier from './bezier';

class App extends Component {
  render() {
    return (
      <div width={'10px'} height={'10px'}>
        <Bezier viewBoxWidth={800} viewBoxHeight={800} />
      </div>
    );
  }
}

export default App;