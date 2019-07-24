import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { INSECTS } from '../../model/insects_mock';
import { Insect } from '../../model/insect';

@Component({
  selector: 'app-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.scss']
})
export class InsectComponent  implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params) =>
        this.insect = this.insects.filter( i => i.id.toString() == params['id'] )[0]
    );

    console.log("teste")

    console.log(this.insect)
  }

  private subscription: any;
  
  insects: Insect[] = INSECTS;

  insect: Insect; 
}
