import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' // app module is not updated because of this 
})
export class UserService {

  constructor( private http: HttpClient) { }

  // CREATE
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

  // READ 
  getUsers(): Observable<User[]>{
    console.log('Inside getUsers');

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe( map((res: User[]) => { 
        // sort, filter, remove, convert
        console.log(res);
        return res;
      }));
  }

  // READ -- fetch user details 
  getUserById(userId: string | null){
    console.log(userId);
    const userAPIUrl = 'https://jsonplaceholder.typicode.com/users/' + userId;

    return this.http.get(userAPIUrl)
      .pipe( map((res: any) => { 
        console.log(res);
        return res;
      }));
  }

  // UPDATE 
  updateUser(userData: any){
    console.log(userData);
    const userAPIUrl = 'https://jsonplaceholder.typicode.com/users/' + userData.id;
    return this.http.put(userAPIUrl, userData)
      .pipe( map((res: any) => { 
        console.log(res);
        return res;
      }));
  }

  // DELETE 
}
