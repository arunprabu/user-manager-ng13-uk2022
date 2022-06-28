import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // Step 1:  have the form tag equivalent in TS side
  addUserForm!: FormGroup;

  constructor( private userService: UserService) {  // 1. connect with the service using dep injection
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // will be exec'd whenever the comp is coming into view
    // ideal place for you to send ajax requests
    console.log('Inside ngOnInit');

    this.addUserForm = new FormGroup({
      // Step 2: have the form element equivalents in TS side 
      // For Step 3 - refer HTML
      name: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    
  }

  handleAddUser(): void{
    console.log(this.addUserForm); // reactive form object

    // form data
    console.log(this.addUserForm.value);

    // 2. send the above data to the service
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { // 3. get the res from the service
        console.log(res);
        if(res && res.id ){
          this.isSaved = true;
        }
      });
    
  }

}
