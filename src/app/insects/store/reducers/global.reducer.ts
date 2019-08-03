import {insectsReducer, InsectsState} from './insect.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface InsectState {
  insects: InsectsState;
}

export const insectReducer: ActionReducerMap<InsectState> = {
  insects: insectsReducer
}

export const getInsectState = createFeatureSelector<InsectState>(
  'insect'
);
