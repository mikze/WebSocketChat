import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import setupSocket from '../../src/clientSocket'

export default class ConectDialogComponent extends React.Component {
  state = {
    open: true,
    name: ''
  };

  handleOpen = () => {
    this.setState({name: ''});
    this.setState({open: true});
  };

  handleClose = () => {
    if(this.state.name === '')
    {
        console.log('no name'); 
    }
    else{
    this.props.dispatch(this.state.name);
    this.setState({open: false});
    }

  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Change Name" onClick={this.handleOpen} />
        <Dialog
          title="Change your nickname"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField onChange = {e => { this.state.name = e.target.value }} hintText="Nickname"/>
        </Dialog>
      </div>
    );
  }
}