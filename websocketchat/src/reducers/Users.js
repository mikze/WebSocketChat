import * as types from '../consts/ActionConsts'
import _ from "lodash"

export const Users = (state = [], action) =>
{
        switch(action.type)
        {

        case types.ADD_USER:
        return Object.assign([], 
          [
            ...state,
            {
              userName: action.name,
            }
          ]);

          case types.RM_USER:
          _.remove(state, {userName: action.name});
          return Object.assign([], state);

          case types.USERS_LIST:
           return Object.assign([], state,action.usersList);

        default:
        return state;
        }
}
