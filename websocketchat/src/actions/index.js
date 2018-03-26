import * as types from '../consts/ActionConsts'

let nextMessageId = 0;

export const addMsg = (msg, author) => ({
	type: types.ADD_MSG,
	id: nextMessageId++,
	msg,
	author
})

export const changeName = (name) => ({
	type: types.CHANGE_NAME,
	name
})

export const messageReceived = (msg, author) => ({
	type : types.MSG_REC,
	id: nextMessageId++,
	msg,
	author
})

export const getToken = (token) => ({
	type : types.GET_TOKEN,
	token
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