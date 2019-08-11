import {createAction, props} from '@ngrx/store';
import {Insect} from '../../model/insect.model';


export const updateBugList = createAction(
  '[Insects] Update bug list',
  props<{insects: Insect[]}>(),
);

export const selectBug = createAction(
  '[Insects] Select bug.',
  props<{insect: Insect}>()
);

export const unselectBug = createAction(
  '[Insects] Unselect bug.'
);

export const createBug = createAction(
  '[Insects] Create bug.',
  props<{insect: Insect}>()
);

export const updateBug = createAction(
  '[Insects] Update bug.',
  props<{insect: Insect}>()
);

export const deleteBug = createAction(
  '[Insects] Delete bug.',
  props<{id: string}>()
);

