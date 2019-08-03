import {createAction, props} from '@ngrx/store';
import {Insect} from '../../model/insect.model';

export const selectInsect = createAction(
  '[Insects] Select insect.',
  props<{insect: Insect}>()
);

export const unselectInsect = createAction(
  '[Insects] Unselect insect.'
);

export const createInsect = createAction(
  '[Insects] Create insect.',
  props<{insect: Insect}>()
);

export const updateInsect = createAction(
  '[Insects] Update insect.',
  props<{insect: Insect}>()
);

export const deleteInsect = createAction(
  '[Insects] Delete insect.',
  props<{id: number}>()
);
