import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleInputRoutingModule } from './sample-input-routing.module';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SampleInputRoutingModule
  ],
  exports: [SampleComponent]
})
export class SampleInputModule { }
