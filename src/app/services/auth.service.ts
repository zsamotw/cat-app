import { Injectable } from '@angular/core';
import { LoginData } from '../model/loginData';


const usersMock = [{ userName: 'admin', password: 'admin' }]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser(loginData: LoginData) {
    return usersMock.find((user) => user.userName === loginData.userName && user.password === loginData.password)
  }
}
