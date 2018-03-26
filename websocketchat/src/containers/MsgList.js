import { connect } from 'react-redux'
import { MsgListComponent } from '../components/MsgListComponent'

export const MsgList = connect(
    state => ({Msgs : state.Msgs}), {})(MsgListComponent);