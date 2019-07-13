import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreModule} from './core/core.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'core'},
  {path: 'insect', pathMatch: 'full', redirectTo: 'core/layout/insects/insect'},
  {path: 'insects', pathMatch: 'full', redirectTo: 'core/layout/insects/insects'},
  {path: 'core', loadChildren: () => CoreModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
