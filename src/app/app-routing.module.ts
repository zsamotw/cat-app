import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { MainAppViewComponent } from './components/main-app-view/main-app-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginScreenComponent },
  { path: 'cats', pathMatch: 'full', component: MainAppViewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
