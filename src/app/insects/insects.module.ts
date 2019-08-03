import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsectsRoutingModule } from './insects-routing.module';
import { InsectsListComponent } from './component/insects-list/insects-list.component';
import { InsectsDetailComponent } from './component/insects-detail/insects-detail.component';
import { InsectsComponent } from './containers/insects/insects.component';
import { InsectComponent } from './containers/insect/insect.component';
import { SharedModule } from '../core/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {StoreModule} from '@ngrx/store';
import {insectReducer} from './store/reducers/global.reducer';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [InsectsListComponent, InsectsDetailComponent, InsectsComponent, InsectComponent],
  imports: [
    CommonModule,
    InsectsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('insect', insectReducer),
    ReactiveFormsModule,
  ]
})
export class InsectsModule { }
