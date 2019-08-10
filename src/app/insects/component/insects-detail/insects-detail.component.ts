import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Insect } from '../../model/insect.model';
import { Action } from '@ngrx/store';
import {unselectBugView, updateBugView} from '../../store/actions/insect.actions';


@Component({
  selector: 'app-insects-detail',
  templateUrl: './insects-detail.component.html',
  styleUrls: ['./insects-detail.component.scss']
})
export class InsectsDetailComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  _insect: Insect;

  @Input('insect')
  set insect(insect: Insect) {
    if (insect) {
      this._insect = JSON.parse(JSON.stringify(insect));
    }
  }

  get insect() {
    return this._insect;
  }

  @Output()
  actionEmmiter = new EventEmitter<Action>();

  unselect() {
    this.actionEmmiter.emit(unselectBugView());
  }


  // tslint:disable-next-line:variable-name
  constructor() { }
  //
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //
  //   if ((value || '').trim()) {
  //     this.insect.habitats.push(value.trim());
  //   }
  //
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  //
  // removeHabitat(habitat: string): void {
  //   this.insect.habitats = this.insect.habitats.filter(item => item !== habitat);
  // }
  //
  // toggleLocomotion(mode: string): void {
  //   if (mode === 'flying') {
  //     this.insect.locomotion.flying = !this.insect.locomotion.flying;
  //   } else if (mode === 'walking') {
  //     this.insect.locomotion.walking = !this.insect.locomotion.walking;
  //   } else if (mode === 'swimming') {
  //     this.insect.locomotion.swimming = !this.insect.locomotion.swimming;
  //   }
  // }
  //
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]);
  //
  //     reader.onload = (x) => {
  //       const result: any = reader.result
  //       this.insect.image = result;
  //     };
  //   }
  // }

  save() {
    this.actionEmmiter.emit(updateBugView({insect: this.insect}))
  }

  ngOnInit() {}
}
