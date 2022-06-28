import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList!: any[]; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // life cycle hook.
    // whenever the comp is coming into view this will be called 
    // ideal place for you to hit the rest api
    console.log('Inside ngOnInit');

    this.userService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res;
      });
  }

}
