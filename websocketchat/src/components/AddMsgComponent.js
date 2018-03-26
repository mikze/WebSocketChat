import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export const AddMsgComponent = ({thisUserName, dispatch}) => 
{
    this.state = {
        input: '',
    }
    
    return(
    <div>
        
        <TextField onChange = {e => {this.state.input = e.target.value}} hintText="Message"/>
        
        <FlatButton 
            onClick ={() => dispatch(this.state.input, thisUserName)} 
            label="Send"
            primary = {true}
            />
    </div>
)}