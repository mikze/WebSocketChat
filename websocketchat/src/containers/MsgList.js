import { connect } from 'react-redux'
import { MsgListComponent } from '../components/MsgListComponent'
import { addMsg } from '../actions'



export const MsgList = connect(
    state => ({Msgs : state.Msgs})
    , {})
    (MsgListComponent)