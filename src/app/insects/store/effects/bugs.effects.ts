import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Insect} from '../../model/insect.model';
import {updateBugList, updateBugView} from '../actions/insect.actions';
import {catchError, concatMap, exhaustMap, map} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {navigateTo} from '../../../store/actions/app.actions';
import {showSnackBar} from '../../../core/store/actions/core.actions';

@Injectable()
export class BugsEffects {
  constructor(private actions: Actions, private firestore: AngularFirestore) {}

  updateBugsList$ = createEffect(() =>
    this.firestore.collection<Insect>('bugs').valueChanges().pipe(
      map(insects => updateBugList({insects})),
  ));

  updateBug$ = createEffect(() => this.actions.pipe(
      ofType(updateBugView),
      exhaustMap((action) =>
        from(this.firestore.doc(`bugs/${action.insect.id}`).set(action.insect)).pipe(
          concatMap(() => from([
            navigateTo({commands: ['core', 'layout', 'insects']}),
            showSnackBar({message: `${action.insect.popularName} updated`, config: {}})
          ])),
          catchError(() => of(showSnackBar({
            message: 'Deu ruim',
            config: {duration: 5000}
          })))
        )
      ),
    ));
}
