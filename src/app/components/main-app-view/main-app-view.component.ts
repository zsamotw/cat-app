import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-app-view',
  templateUrl: './main-app-view.component.html',
  styleUrls: ['./main-app-view.component.scss']
})
export class MainAppViewComponent {

  constructor(public authService: AuthService) { }

  logout() {
    console.log('log1')
    this.authService.logout();
  }

}
