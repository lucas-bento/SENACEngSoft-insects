import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Insect } from '../../model/insect.model';
import { MatChipInputEvent } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from '@ngrx/store';
import { unselectInsect } from '../../store/actions/insect.actions';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-insects-detail',
  templateUrl: './insects-detail.component.html',
  styleUrls: ['./insects-detail.component.scss']
})
export class InsectsDetailComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  insectForm = this.fb.group({
    id: [''],
    scientificName: [''],
    popularName: [''],
    description: [''],
  });

  @Input('insect')
  set insect(insect: Insect) {
    this.insectForm.patchValue(insect);
  }
  // insect: Insect;

  @Output()
  actionEmmiter = new EventEmitter<Action>();

  unselect() {
    this.actionEmmiter.emit(unselectInsect());
  }


  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder,    private _snackBar: MatSnackBar) { }

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
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (x) => {
        const result: any = reader.result
        this.insect.image = result;
      };
    }
  }

  save() {
    // this.insects[this.insect.id] = this.insect
    this._snackBar.open('Inseto salvo!', null, {
      duration: 1000
    });
  }

  ngOnInit() {}







  //
  // @Input()
  // insect: Insect;
  // insects: Insect[];
  //
  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  //
  // constructor(private _snackBar: MatSnackBar) { }
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
  //     var reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]);
  //
  //     reader.onload = (event) => {
  //       var result:any = reader.result
  //       this.insect.image = result;
  //     }
  //   }
  // }
  //
  // save() {
  //   this.insects[this.insect.id] = this.insect
  //   this._snackBar.open("Inseto salvo!", null,{
  //     duration: 1000
  //   });
  // }
  //
  // ngOnInit() {
  //   if (this.insect == null) {
  //     this.insect = {
  //       id: this.insects.length,
  //       scientificName: "",
  //       popularName: "",
  //       description:"",
  //       image: "",
  //       habitats: [],
  //       locomotion: {
  //           walking: false,
  //           flying: false,
  //           swimming: false,
  //       }
  //     };
  //   }
  // }
}
