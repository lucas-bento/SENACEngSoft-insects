import {bugViewReducer, BugViewState} from './insect.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface InsectState {
  insects: BugViewState;
}

export const insectReducer: ActionReducerMap<InsectState> = {
  insects: bugViewReducer
};

export const getInsectState = createFeatureSelector<InsectState>(
  'insect'
);
