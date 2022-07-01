import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: have default cart items 
  private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ]

  // Step 2: Let's work on to create an Observable. so that any comp can subscribe to it. 
  // In order to do it, create an obj of BehaviorSubject with the currentCartItems as default data
  private cartItemsList = new BehaviorSubject(this.currentCartItems);

  // Step3: Let's create an observable for the above BehaviorSubject object. 
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() { 
    
  }

  // update the cart items 
  updateCart(pdt: any){
    console.log(pdt);

    // let's work on updating the cart items array over observable 
    this.latestCartItems.pipe( take(1) ).subscribe( (defaultCartItems: any) => {
      console.log(defaultCartItems);
      
      const newCartItems = [...defaultCartItems, pdt];
      console.log(newCartItems);
      this.cartItemsList.next(newCartItems); // emitting updated array over observable
    });
  }
}
