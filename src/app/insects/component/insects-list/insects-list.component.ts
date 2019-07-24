import { Component, OnInit, Input } from '@angular/core';
import { Insect } from '../../model/insect';

@Component({
  selector: 'app-insects-list',
  templateUrl: './insects-list.component.html',
  styleUrls: ['./insects-list.component.scss']
})
export class InsectsListComponent implements OnInit {

  constructor() { }

  @Input() insects: Insect[];

  ngOnInit() {
    console.log(this.insects)
  }

}
