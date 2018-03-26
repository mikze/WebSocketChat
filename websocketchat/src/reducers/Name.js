import * as types from '../consts/ActionConsts'

export const Name = (state = [{myUserName: 'anon'}], action) =>
{
    switch(action.type)
    {
        case types.SET_NEW_NAME:
            return Object.assign({}, [{myUserName: action.myUserName}]);
        break
        case types.CHANGE_NAME:
        default:
        return state;
    }
}