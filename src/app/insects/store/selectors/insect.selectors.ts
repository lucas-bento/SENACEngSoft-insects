import {createSelector} from '@ngrx/store';
import {getInsectState} from '../reducers/global.reducer';
import {insectAdapter} from '../reducers/insect.reducer';

export const getInsectsState = createSelector(
  getInsectState,
  state => state.insects
);


export const getAllInsects = createSelector(
  getInsectsState,
  state => insectAdapter.getSelectors().selectAll(state)
);

export const getSelectedInsect = createSelector(
  getInsectsState,
  state => state.insect
);
