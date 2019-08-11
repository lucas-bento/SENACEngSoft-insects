import {Insect} from '../../model/insect.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createBug, deleteBug, selectBug, unselectBug, updateBugList, updateBug} from '../actions/insect.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export const bugAdapter = createEntityAdapter<Insect>({
  sortComparer: (a: Insect, b: Insect) => a.popularName.localeCompare(b.popularName)
});

export interface BugState extends EntityState<Insect> {
  bug?: Insect;
}

const initialState = bugAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateBugList, (state, {bugs: bugs}) => bugAdapter.addAll(bugs, state)),
  on(selectBug, (state, {bug: bug}) => ({...state, bug: bug})),
  on(unselectBug, updateBug, (state: BugState) => {
    const {bug: bug,  ...rest} = state;
    return rest;
  }),
  on(createBug, (state, {bug: bug}) => bugAdapter.addOne(bug, state)),
  on(deleteBug, (state, {id}) => bugAdapter.removeOne(id, state)),
);

export function bugReducer(state: BugState, action: Action) {
  return reducer(state, action);
}
