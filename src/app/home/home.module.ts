import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { HomeDirective } from '../../directive/home.directive';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatSlideToggleModule,
    MatButtonModule,
    HomeDirective
  ],
  exports: [HomeComponent, MatSlideToggleModule, MatButtonModule]
})
export class HomeModule { }
