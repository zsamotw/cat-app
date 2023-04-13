import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-app-view',
  templateUrl: './main-app-view.component.html',
  styleUrls: ['./main-app-view.component.scss']
})
export class MainAppViewComponent {
  isLoading = false;

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  onLoading(event: boolean) {
    this.isLoading = event;
  }

}
