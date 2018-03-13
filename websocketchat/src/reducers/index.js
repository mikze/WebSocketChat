import { combineReducers } from "redux"
import {Msgs} from "./Msgs"
import {Users} from "./Users"


const Chat = combineReducers({
	Msgs,
    Users
})

export default Chat