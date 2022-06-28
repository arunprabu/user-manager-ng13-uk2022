import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { UsersComponent } from './users/components/users.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './concepts/components/employee/employee.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    UsersComponent,
    AboutComponent,
    EmployeeComponent,
    CebComponent,
    ColorizerDirective,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should be bootstrapped with a comp -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
