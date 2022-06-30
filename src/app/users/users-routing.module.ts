import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// setting up child routes/nested routes 
const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:userId', component: UserDetailsComponent } // userId is url param
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes) // registering child/nested routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
