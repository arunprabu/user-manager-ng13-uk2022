import { Injectable } from '@angular/core';

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

  // Step2: We need to create an observable. so that any comp can subscribe to it. 
  // Step3: make the cart items subscribable 

  // Step4: make the cart items updateable 


  constructor() { }
}
