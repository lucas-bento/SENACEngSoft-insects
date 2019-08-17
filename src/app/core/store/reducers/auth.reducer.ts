import {Action, createReducer, on} from '@ngrx/store';
import { updateUserInfo, signOutSucces} from '../actions/auth.actions';
import {UserInfo} from 'firebase';

export interface AuthState {
  user?:UserInfo;
}

const initialState: AuthState = {};

const reducer = createReducer<AuthState>(
  initialState,
  on(updateUserInfo, (state, {user: userInfo}) => {
    if(userInfo){
      return ({...state, user: userInfo});
    } else {
      const {user, ...rest} = state;
      return rest;
    }

  }),
  on(signOutSucces,  ((state: AuthState) =>{
    const {user, ...rest} = state;
    return rest;
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
