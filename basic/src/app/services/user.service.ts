import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    console.log(' user service has been initialized')
   }

   sayHi() {
    console.log('hi')
   }
}
