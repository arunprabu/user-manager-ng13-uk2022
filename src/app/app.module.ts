import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './concepts/employee/employee.component';
import { CebComponent } from './concepts/ceb/ceb.component';

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
    CebComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should be bootstrapped with a comp -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
