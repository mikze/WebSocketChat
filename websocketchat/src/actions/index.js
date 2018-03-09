import * as types from '../consts/ActionConsts'

let nextMessageId = 0;

export const addMsg = (msg, author) => ({
	type: types.ADD_MSG,
	id: nextMessageId++,
	msg,
	author
})