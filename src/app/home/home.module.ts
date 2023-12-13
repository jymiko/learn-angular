import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatSlideToggleModule,
    MatButtonModule
  ],
  exports: [HomeComponent, MatSlideToggleModule, MatButtonModule]
})
export class HomeModule { }
