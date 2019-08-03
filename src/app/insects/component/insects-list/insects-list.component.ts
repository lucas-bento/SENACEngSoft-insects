import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Insect } from '../../model/insect.model';
import {Action} from '@ngrx/store';
import {selectInsect} from '../../store/actions/insect.actions';


@Component({
  selector: 'app-insects-list',
  templateUrl: './insects-list.component.html',
  styleUrls: ['./insects-list.component.scss']
})
export class InsectsListComponent implements OnInit {

  constructor() { }

  @Input()
  insects: Insect[];

  @Output()
  actionEmmiter = new EventEmitter<Action>();

  ngOnInit() {
    console.log(this.insects);
  }

  select(insect: Insect) {
    this.actionEmmiter.emit(selectInsect({insect}));
  }
}
