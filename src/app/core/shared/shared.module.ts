import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatExpansionModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
  ]
})
export class SharedModule { }
