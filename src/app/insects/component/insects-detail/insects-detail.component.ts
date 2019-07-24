import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { Insect } from '../../model/insect';
import { MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-insects-detail',
  templateUrl: './insects-detail.component.html',
  styleUrls: ['./insects-detail.component.scss']
})
export class InsectsDetailComponent implements OnInit {

  @Input()
  insect: Insect;

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.insect.habitats.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeHabitat(habitat: string): void {
    this.insect.habitats = this.insect.habitats.filter(item => item !== habitat);

    console.log("removing: " + habitat)
  }

  toggleLocomotion(mode: string): void {
    if (mode === 'flying') {
      this.insect.locomotion.flying = !this.insect.locomotion.flying;
    } else if (mode === 'walking') {
      this.insect.locomotion.walking = !this.insect.locomotion.walking;
    } else if (mode === 'swimming') {
      this.insect.locomotion.swimming = !this.insect.locomotion.swimming;

    }
  }


  ngOnInit() {
    console.log(this.insect)
  }
}
