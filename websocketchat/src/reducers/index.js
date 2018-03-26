import { combineReducers } from "redux"
import {Msgs}  from "./Msgs"
import {Users} from "./Users"
import {Name} from "./Name"

const Chat = combineReducers({
    Msgs,
    Name,
    Users
})

export default Chat