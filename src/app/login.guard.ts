import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean{
    // If username exists in localstorage, 
    if(localStorage.getItem("userid")){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
