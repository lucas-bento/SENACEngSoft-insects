import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsectsComponent} from './containers/insects/insects.component';
import {InsectComponent} from './containers/insect/insect.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'insects'},
  {path: 'insects', component: InsectsComponent},
  {path: 'insect', component: InsectComponent},
  {path: 'insect/:id', component: InsectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsectsRoutingModule { }
