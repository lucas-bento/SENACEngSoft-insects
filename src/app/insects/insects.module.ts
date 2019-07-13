import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsectsRoutingModule } from './insects-routing.module';
import { InsectsListComponent } from './component/insects-list/insects-list.component';
import { InsectsDetailComponent } from './component/insects-detail/insects-detail.component';
import { InsectsComponent } from './containers/insects/insects.component';
import { InsectComponent } from './containers/insect/insect.component';


@NgModule({
  declarations: [InsectsListComponent, InsectsDetailComponent, InsectsComponent, InsectComponent],
  imports: [
    CommonModule,
    InsectsRoutingModule
  ]
})
export class InsectsModule { }
