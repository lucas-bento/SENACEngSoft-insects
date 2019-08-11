import {createSelector} from '@ngrx/store';
import {getInsectState} from '../reducers/global.reducer';
import {bugAdapter} from '../reducers/insect.reducer';

export const getBugState = createSelector(
  getInsectState,
  state => state.bugs
);


export const getAllBugs = createSelector(
  getBugState,
  state => bugAdapter.getSelectors().selectAll(state)
);

export const getSelectedBug = createSelector(
  getBugState,
  state => state.bug
);
