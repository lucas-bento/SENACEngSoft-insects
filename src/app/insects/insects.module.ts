import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsectsRoutingModule } from './insects-routing.module';
import { InsectsListComponent } from './containers/insects-list/insects-list.component';
import { InsectsDetailComponent } from './containers/insects-detail/insects-detail.component';


@NgModule({
  declarations: [InsectsListComponent, InsectsDetailComponent],
  imports: [
    CommonModule,
    InsectsRoutingModule
  ]
})
export class InsectsModule { }
