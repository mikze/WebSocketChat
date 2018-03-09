import * as types from '../consts/ActionConsts'

export const Msgs = (state = [], action) =>
{
    switch(action.type)
    {
        case types.MSG_REC:
        case types.ADD_MSG:
        return [
            ...state,
            {
              author: action.author,
              text: action.msg
            }
          ]
        case types.MSG_REC:

        default:
        return state;
    }
}