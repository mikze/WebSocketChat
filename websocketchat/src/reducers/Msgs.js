import * as types from '../consts/ActionConsts'

const Msgs = (state = [], action) =>
{
    switch(action.type)
    {
        case types.ADD_MSG:
        return [
            ...state,
            {
              author: action.author,
              text: action.text
            }
          ]
        case types.MSG_REC:

        default:
        return state;
    }
}