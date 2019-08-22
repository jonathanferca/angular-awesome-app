import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): object {
    return {
      name: 'Jon',
      lastName: 'Snow',
      position: 'King in the north'
    };
  }
}
