import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: object = {
    name: 'Jon',
    lastName: 'Snow',
    position: 'King in the north'
  };

  constructor() { }

  getUser(): object {
    return this.user;
  }
}
