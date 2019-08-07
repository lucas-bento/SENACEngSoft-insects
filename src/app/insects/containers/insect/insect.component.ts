import { Component, OnInit, Input } from '@angular/core';
import { Insect } from '../../model/insect.model';
import {Observable} from 'rxjs';
import {Action, select, Store} from '@ngrx/store';
import {BugViewState} from '../../store/reducers/insect.reducer';
import {getSelectedInsect} from '../../store/selectors/insect.selectors';

@Component({
  selector: 'app-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.scss']
})
export class InsectComponent  implements OnInit {
  insect$: Observable<Insect>;

  constructor(private store: Store<BugViewState>) {}

  ngOnInit() {
    this.insect$ = this.store.pipe(select(getSelectedInsect));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
