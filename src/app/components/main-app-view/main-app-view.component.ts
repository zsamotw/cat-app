import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-app-view',
  templateUrl: './main-app-view.component.html',
  styleUrls: ['./main-app-view.component.scss']
})
export class MainAppViewComponent implements AfterViewInit {
  isLoading = false;

  constructor(public authService: AuthService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  logout() {
    this.authService.logout();
  }

  onLoading(event: boolean) {
    this.isLoading = event;
  }
}
