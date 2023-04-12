import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  loginData = {
    userName: null,
    password: null
  }

  isIncorrectLoginData = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['cats']);
    }
  }


  hideIncorrectLoginWarning() {
    this.isIncorrectLoginData = false;
  }

  onSubmit(): void {
    const user = this.authService.getUser(this.loginData);
    if (user) {
      this.authService.setCurrentUser(user.userName);
      this.router.navigate(['cats']);
    } else {
      this.isIncorrectLoginData = true;
    }
  }
}
