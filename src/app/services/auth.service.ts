import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../models/login-data.interface';


const usersMock = [{ userName: 'admin', password: 'admin' }]
const currentUserKey = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getUser(loginData: LoginData) {
    return usersMock.find((user) => user.userName === loginData.userName && user.password === loginData.password);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(currentUserKey);
  }

  setCurrentUser(userName: string): void {
    localStorage.setItem(currentUserKey, userName);
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  logout(): void {
    localStorage.removeItem(currentUserKey);
    this.router.navigate(['']);
  }
}
