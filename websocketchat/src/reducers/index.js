import { combineReducers } from "redux"
import messages from "./Msgs"
import users from "./Users"

const Chat = combineReducers({
	Msgs,
	Users
})

export default Chat