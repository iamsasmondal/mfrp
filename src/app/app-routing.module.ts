import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path: 'welcome/:name', component:WelcomeComponent}
  {path: 'welcome', component:WelcomeComponent, canActivate: [LoginGuard]},
  {path:'',redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
