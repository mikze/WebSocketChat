import { connect } from 'react-redux'
import {AddMsgComponent} from '../components/AddMsgComponent'
import { addMsg } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (msg, author) => {
    dispatch(addMsg(msg, author))
  }
})

export const AddMsg = connect(state => ({thisUserName: state.Name[0].myUserName}), mapDispatchToProps)(AddMsgComponent)