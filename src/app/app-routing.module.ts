import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { MainAppViewComponent } from './components/main-app-view/main-app-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'cats', component: MainAppViewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
