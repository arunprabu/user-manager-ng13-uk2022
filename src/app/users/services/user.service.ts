import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root' // app module is not updated because of this 
})
export class UserService {

  constructor( private http: HttpClient) { }

  createUser(userData: any){ // 1. get the form data from the comp ts 
    console.log(userData);

    // 2. send the above data to the rest api 
      // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method? POST
      // 2.3 What's the REST API Client? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users', userData)
      .pipe( map((res: any) => { // 3. get the res from the rest api
        console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  getUsers(){
    console.log('Inside getUsers');

    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map((res: any) => { 
        console.log(res);
        return res;
      }));
  }
}
