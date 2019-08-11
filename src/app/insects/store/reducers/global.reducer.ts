import {bugReducer, BugState} from './insect.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface InsectState {
  insects: BugState;
}

export const insectReducer: ActionReducerMap<InsectState> = {
  insects: bugReducer
};

export const getInsectState = createFeatureSelector<InsectState>(
  'insect'
);
