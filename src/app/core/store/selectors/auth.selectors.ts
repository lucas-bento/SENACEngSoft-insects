import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/feature.reducer';

export const getAuthState = createSelector (
  getCoreState,
  state => state.auth
);

export const isAuthenticated = createSelector (
  getCoreState,
  state => !!state.auth
);

export const getAuthenticatedUser = createSelector (
  getCoreState,
  state => state.auth
);
