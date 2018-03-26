import * as types from '../consts/ActionConsts'

export const Name = (state = [{myUserName: 'anon'}], action) =>
{
    switch(action.type)
    {
        case types.CHANGE_NAME:
        return [
            {
              myUserName: action.name,
            }
          ]
        default:
        return state;
    }
}