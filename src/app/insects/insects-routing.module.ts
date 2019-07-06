import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsectsListComponent} from './containers/insects-list/insects-list.component';
import {InsectsDetailComponent} from './containers/insects-detail/insects-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: InsectsListComponent},
  {path: 'detail', component: InsectsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsectsRoutingModule { }
