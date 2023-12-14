import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleInputRoutingModule } from './sample-input-routing.module';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterModule } from '../counter/counter.module';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SampleInputRoutingModule,
    CounterModule
  ],
  exports: [SampleComponent]
})
export class SampleInputModule { }
