import {Insect} from '../../model/insect.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createBugView, deleteBugView, selectBugView, unselectBugView, updateBugList, updateBugView} from '../actions/insect.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export const bugViewAdapter = createEntityAdapter<Insect>({
  sortComparer: (a: Insect, b: Insect) => a.popularName.localeCompare(b.popularName)
});

export interface BugViewState extends EntityState<Insect> {
  insect?: Insect;
}

const initialState = bugViewAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateBugList, (state, {insects}) => bugViewAdapter.addAll(insects, state)),
  on(selectBugView, (state, {insect}) => ({...state, insect})),
  on(unselectBugView, updateBugView, (state: BugViewState) => {
    const {insect,  ...rest} = state;
    return rest;
  }),
  on(createBugView, (state, {insect}) => bugViewAdapter.addOne(insect, state)),
  on(deleteBugView, (state, {id}) => bugViewAdapter.removeOne(id, state)),
);

export function bugViewReducer(state: BugViewState, action: Action) {
  return reducer(state, action);
}
