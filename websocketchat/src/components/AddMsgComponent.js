import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class AddMsgComponent extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
}
    
    render(){
    const {thisUserName, dispatch} = this.props;

    return(
    <div>
        
        <TextField onChange = { e => this.setState({input: e.target.value}) } hintText="Message"/>
        
        <FlatButton 
            onClick ={() => dispatch(this.state.input, thisUserName)} 
            label="Send"
            primary = {true}
            />
    </div>
        );
}
}