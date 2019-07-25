import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AwesomeModule } from './awesome/awesome.module'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    AwesomeModule,
    FormsModule,
  ]
})
export class SharedModule { }
