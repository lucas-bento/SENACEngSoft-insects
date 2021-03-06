import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {EMPTY, from, of} from 'rxjs';
import {auth} from 'firebase/app';
import {catchError, exhaustMap, map, mapTo, switchMap, switchMapTo} from 'rxjs/operators';
import {signInGoogle, updateUserInfo, signOut, signOutSucces, signInEmail} from '../actions/auth.actions';
import {showSnackBar} from '../actions/core.actions';
import {navigateTo} from '../../../store/actions/app.actions';

@Injectable()
export class AuthEffects {

  updateUserInfo$ = createEffect(() => this.authFire.user.pipe(
    map(user => {
      if (user) {
        const {displayName, uid, email, phoneNumber, photoURL, providerId} = user;
        return updateUserInfo({user: {uid, displayName, email, phoneNumber, photoURL, providerId}})
      }

      return updateUserInfo({})
    })
  ));

  signInEmail$ = createEffect( () => this.actions$.pipe(
    ofType(signInEmail),
    exhaustMap( ({email, password}) =>
      from(this.authFire.auth.signInWithEmailAndPassword(email, password)).pipe(
        mapTo(navigateTo({commands:['core','layout','home']})),
        catchError((error: auth.Error) => of( showSnackBar({
            message:error.message,
            config:{
              duration: 5000
            }
  })))))));

  signInGoogle$ = createEffect(() => this.actions$.pipe(
      ofType(signInGoogle),
      exhaustMap( () => from(
        this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider())
      ).pipe(
        mapTo(navigateTo({commands:['core','layout','home']})),
        catchError((error:auth.Error) => of(showSnackBar({
          message: error.message,
          config: {
            duration:5000
          }
  })))))));

  signOut$ = createEffect(() => this.actions$.pipe(
    ofType(signOut),
    exhaustMap( () => from(
      this.authFire.auth.signOut()
  ).pipe(
    mapTo(signOutSucces())
    ))
  ));

  signOutsuccess$ = createEffect(() => this.actions$.pipe(
    ofType(signOutSucces),
    mapTo(navigateTo({commands:['core','layout','home']})),
  ));


  constructor(private actions$: Actions, private authFire: AngularFireAuth) {
  }
}
