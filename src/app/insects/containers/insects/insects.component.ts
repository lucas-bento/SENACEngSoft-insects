import { Component, OnInit } from '@angular/core';
import { INSECTS } from '../../model/insects_mock';
import { Insect } from '../../model/insect';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.scss']
})
export class InsectsComponent implements OnInit {
  
  ngOnInit(): void {
    console.log(this.insects)
  }
  

  insects: Insect[] = INSECTS;



}
