import * as types from '../consts/ActionConsts'
import { stat } from 'fs';
import { prototype } from 'events';
import _ from "lodash"

export const Users = (state = [], action) =>
{
        switch(action.type)
        {
        case types.ADD_USER:
        return [
            ...state,
            {
              userName: action.name,
            }
          ]
          break
          case types.RM_USER:
          _.remove(state, {userName: action.name});
          return Object.assign([], state);
          break
          case types.USERS_LIST:
           return Object.assign([],state,action.usersList);
          break
        default:
        return state;
        }
}

//{"type":"RM_USER","name":"anon1"}