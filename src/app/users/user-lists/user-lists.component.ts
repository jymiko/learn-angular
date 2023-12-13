import { Component } from '@angular/core';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent {
  public data: any[] = new Array;
  constructor(private userService:UserService){
    console.log(userService)
  }
  public getData(){
    this.userService
    .GetUserList()
    .subscribe(response => {
      this.data = response
    })
  }

  ngOnInit(){
    this.getData()
  }
}
