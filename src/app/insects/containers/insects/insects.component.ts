import { Component, OnInit } from '@angular/core';
import { Insect } from '../../model/insect.model';
import {InsectsState} from '../../store/reducers/insect.reducer';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getAllInsects} from '../../store/selectors/insect.selectors';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.scss']
})
export class InsectsComponent implements OnInit {

  insects$: Observable<Insect []>;

  constructor(private store: Store<InsectsState>) { }
  ngOnInit(): void {
    this.insects$ = this.store.pipe(select(getAllInsects));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
