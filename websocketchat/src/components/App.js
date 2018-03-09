import React, { Component } from 'react';
import { AddMsg } from "../containers/AddMsg"

class App extends Component {
  render() {
    return (
      <div>
        <AddMsg/>
        Hello Chat!
      </div>
    );
  }
}

export default App;
