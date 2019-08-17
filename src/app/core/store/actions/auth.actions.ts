import {createAction, props} from '@ngrx/store';
import {MatSnackBarConfig} from '@angular/material';
import {UserInfo} from 'firebase';

export const signInEmail = createAction(
  '[Core - Auth] Sign in with email and password',
  props<{ email:string, password: string}>()
);

export const signInGoogle = createAction(
  '[Core - Auth] Sign in with Google'
);

export const updateUserInfo = createAction(
  '[Core - Auth] Sign in Successfully',
  props<{ user?:UserInfo }>()
);

export const signOut = createAction(
  '[Core - Auth] Sign out'
);


export const signOutSucces = createAction(
  '[Core - Auth] Sign out Successfully'
);
