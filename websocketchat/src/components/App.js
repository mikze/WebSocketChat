import React, { Component } from 'react';
import { AddMsg } from "../containers/AddMsg"
import { MsgList } from "../containers/MsgList"
import { UsersList } from "../containers/UsersList"
import ConnectDialog from "../containers/ConnectDialog"
import "../css/layout.css"

class App extends Component {
  render() {
   
    return (
      <div>
        
        <div className = "Container">
        <ConnectDialog />
          <div className = "UsersList">
            <UsersList />
          </div>
          <div className = "MsgList">
            <MsgList />
          </div>
          <div className = "AddMsg">
            <AddMsg />
          </div>
          </div>

      </div>
    );
  }
}

export default App;