import {createSelector} from '@ngrx/store';
import {getInsectState} from '../reducers/global.reducer';
import {bugViewAdapter} from '../reducers/insect.reducer';

export const getInsectsState = createSelector(
  getInsectState,
  state => state.insects
);


export const getAllInsects = createSelector(
  getInsectsState,
  state => bugViewAdapter.getSelectors().selectAll(state)
);

export const getSelectedInsect = createSelector(
  getInsectsState,
  state => state.insect
);
