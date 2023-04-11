import { CatsViewComponent } from './components/cats-view/cats-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'cats', component: CatsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
