import * as types from '../consts/ActionConsts'

let nextMessageId = 0;

export const addMsg = (msg, author) => ({
	type: types.ADD_MSG,
	id: nextMessageId++,
	msg,
	author
})

export const changeName = myUserName => ({
	type: types.CHANGE_NAME_REQUEST,
	myUserName
})

export const messageReceived = (msg, author) => ({
	type : types.MSG_REC,
	id: nextMessageId++,
	msg,
	author
})

export const addUserToList = name => 
({
	type: types.ADD_USER,
	name
})

export const removeUserFromList = name =>
({
	type : types.RM_USER,
	name
})

export const setUsersList = usersList =>
({
	type : types.USERS_LIST,
	usersList
})

export const setNewName = myUserName =>
({
	type : types.SET_NEW_NAME,
	myUserName
})