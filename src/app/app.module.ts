import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './concepts/components/employee/employee.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { LoginComponent } from './auth/components/login/login.component';
import { ProductsModule } from './products/products.module';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    EmployeeComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent,
    EllipsisPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel in concepts.comp
    HttpClientModule,
    UsersModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should be bootstrapped with a comp -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
