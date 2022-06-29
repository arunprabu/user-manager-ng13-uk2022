import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;
  dupUserData: any;
  isUpdated = false;
  

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');

    // read the url param
    const userId = this.route.snapshot.paramMap.get('userId');
    console.log(userId);

    this.userService.getUserById(userId)
      .subscribe( (res: any) => {
        console.log(res);
        this.userData = res;
      });
  }

  handleEditModalOpen(){
    this.dupUserData = { ...this.userData }; // shallow copy
  }

  handleUpdate(form: NgForm){
    console.log(form); // you can use this for further validation
    // submittable form data
    console.log(this.dupUserData);

    this.userService.updateUser(this.dupUserData)    
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.id){
          this.isUpdated = true;
          this.userData = res;
        }
      })
    
  }
}
