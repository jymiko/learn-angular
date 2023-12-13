import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListsComponent } from './user-lists/user-lists.component';


@NgModule({
  declarations: [UserListsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UserListsComponent]
})
export class UsersModule { }
