import {bugReducer, BugState} from './insect.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface InsectState {
  bugs: BugState;
}

export const insectReducer: ActionReducerMap<InsectState> = {
  bugs: bugReducer
};

export const getInsectState = createFeatureSelector<InsectState>(
  'insect'
);
