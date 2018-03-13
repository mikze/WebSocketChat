import React, { Component } from 'react';
import { AddMsg } from "../containers/AddMsg"
import { MsgList } from "../containers/MsgList"

class App extends Component {
  render() {
    return (
      <div>
        <MsgList/>
        <AddMsg/>
        Hello Chat!
      </div>
    );
  }
}

export default App;
