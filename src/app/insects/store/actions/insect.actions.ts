import {createAction, props} from '@ngrx/store';
import {Insect} from '../../model/insect.model';

export const selectBugView = createAction(
  '[Insects] Select bugView.',
  props<{insect: Insect}>()
);

export const unselectBugView = createAction(
  '[Insects] Unselect bugView.'
);

export const createBugView = createAction(
  '[Insects] Create bugView.',
  props<{insect: Insect}>()
);

export const updateBugView = createAction(
  '[Insects] Update bugView.',
  props<{insect: Insect}>()
);

export const deleteBugView = createAction(
  '[Insects] Delete bugView.',
  props<{id: number}>()
);
