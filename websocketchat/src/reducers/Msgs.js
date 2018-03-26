import * as types from '../consts/ActionConsts'

export const Msgs = (state = [], action) =>
{
    switch(action.type)
    {
        case types.MSG_REC:
        
        return Object.assign([],
            [
                    ...state,
                {
                    author: action.author,
                    text: action.msg
                }
            ]);

        default:
        return state;
    }
}