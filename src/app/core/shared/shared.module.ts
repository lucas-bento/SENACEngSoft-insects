import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AwesomeModule } from './awesome/awesome.module'


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    AwesomeModule,
  ]
})
export class SharedModule { }
