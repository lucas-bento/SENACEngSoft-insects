import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Insect } from '../../model/insect.model';
import {BugState} from '../../store/reducers/insect.reducer';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getAllBugs} from '../../store/selectors/insect.selectors';
import { selectBug } from '../../store/actions/insect.actions';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.scss']
})
export class InsectsComponent implements OnInit {

  insects$: Observable<Insect []>;
  
  constructor(private store: Store<BugState>) { }

  ngOnInit(): void {
    this.insects$ = this.store.pipe(select(getAllBugs));
  }

  createInsect() {
    this.dispatch(selectBug({bug: new Insect()}));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
