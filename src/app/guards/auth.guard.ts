import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { AuthService } from "./../auth/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkUserAccess();
    // if(this.authService.isLoggedIn !== true) {
    //   this.router.navigate(['sign-in'])
    //   return false;
    // }
    // return true;
  }

  checkUserAccess() {
    // user is authenticated
    if (this.authService.isLoggedIn){
      return true;
    }
    else {
      // user is not authenticated then redirect to login page
      this.router.navigate(['sign-in']);
      return false;
    }
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.checkUserAccess();
  }

}
