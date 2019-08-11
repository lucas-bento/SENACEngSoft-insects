import {Insect} from '../../model/insect.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createBug, deleteBug, selectBug, unselectBug, updateBugList, updateBug} from '../actions/insect.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export const bugAdapter = createEntityAdapter<Insect>({
  sortComparer: (a: Insect, b: Insect) => a.popularName.localeCompare(b.popularName)
});

export interface BugState extends EntityState<Insect> {
  insect?: Insect;
}

const initialState = bugAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateBugList, (state, {insects}) => bugAdapter.addAll(insects, state)),
  on(selectBug, (state, {insect}) => ({...state, insect})),
  on(unselectBug, updateBug, (state: BugState) => {
    const {insect,  ...rest} = state;
    return rest;
  }),
  on(createBug, (state, {insect}) => bugAdapter.addOne(insect, state)),
  on(deleteBug, (state, {id}) => bugAdapter.removeOne(id, state)),
);

export function bugReducer(state: BugState, action: Action) {
  return reducer(state, action);
}