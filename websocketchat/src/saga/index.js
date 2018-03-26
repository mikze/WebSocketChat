import { takeEvery } from 'redux-saga/effects'
import * as types from '../consts/ActionConsts'

const MsgMiddlewareHandler = function* handleNewMessage(params) {
	yield takeEvery(types.ADD_MSG, (action) => {
		params.socket.send(JSON.stringify(action))
	})
	yield takeEvery(types.CHANGE_NAME, (action) => {
		params.socket.send(JSON.stringify(action))
	})
}

export default MsgMiddlewareHandler