import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export const AddMsgComponent = props => 
{
    this.state = {
        input: '',
        name: 'Anonymous'
    }
    
    return(
    <div>
        <TextField onChange = {e => {this.state.input = e.target.value}} hintText="Message"/>
        <TextField onChange = {e => { e.target.value ? this.state.name = e.target.value : this.state.name = 'Anonymous' }} hintText="Nickname"/>

        <FlatButton onClick ={ 

            () => {props.dispatch(this.state.input, this.state.name)} 

            } label="Send"/>
    </div>
)}