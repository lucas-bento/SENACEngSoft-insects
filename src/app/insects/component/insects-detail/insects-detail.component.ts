import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { Insect } from '../../model/insect';
import { MatChipInputEvent} from '@angular/material';
import { INSECTS } from '../../model/insects_mock';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-insects-detail',
  templateUrl: './insects-detail.component.html',
  styleUrls: ['./insects-detail.component.scss']
})
export class InsectsDetailComponent implements OnInit {

  @Input()
  insect: Insect;
  insects: Insect[] = INSECTS;

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private _snackBar: MatSnackBar) { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.insect.habitats.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeHabitat(habitat: string): void {
    this.insect.habitats = this.insect.habitats.filter(item => item !== habitat);
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

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.insect.image = event.target.result;
      }
    }
  }

  save() {
    this.insects[this.insect.id] = this.insect
    this._snackBar.open("Inseto salvo!", null,{
      duration: 1000
    });
  }

  ngOnInit() {
    if (this.insect == null) {
      this.insect = {
        id: this.insects.length,
        scientificName: "",
        popularName: "",
        description:"",
        image: "",
        habitats: [],
        locomotion: {
            walking: false,
            flying: false,
            swimming: false,
        }
      };
    }
  }
}
