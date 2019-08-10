import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import actions from '@angular/fire/schematics/deploy/actions';
import {navigateTo} from '../actions/app.actions';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {showSnackBar} from '../../core/store/actions/core.actions';

@Injectable()
export class AppEffects {

  navigateTo$ = createEffect(() => this.actions$.pipe(
    ofType(navigateTo),
    tap(action => this.router.navigate(action.commands))
  ), {dispatch: false});

  constructor(private actions$: Actions,
              private router: Router) {}
}
