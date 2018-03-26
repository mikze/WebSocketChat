import *  as types from '../consts/ActionConsts'
import {addUserToList, removeUserFromList,setUsersList,messageReceived} from '../actions'

const setupSocket = (dispatch) => {
	
	const socket = new WebSocket('ws://localhost:8080')

	socket.onopen = () => {
	}

	socket.onmessage = (event) => {
		const data = JSON.parse(event.data)
		switch (data.type) {
			case types.ADD_USER:
			    console.log("TUTAJ",data.name)
				dispatch(addUserToList(data.name))
				break
			case types.RM_USER:
				dispatch(removeUserFromList(data.name))
			break

			case types.USERS_LIST:
				dispatch(setUsersList(data.clientList))
			break
			case types.MSG_REC:
				dispatch(messageReceived(data.msg, data.author))
			break
			default:
				break
		}
	}

	return socket
}

export default setupSocket;