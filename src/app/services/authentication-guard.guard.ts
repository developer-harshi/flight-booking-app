import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanActivate {
  constructor(
    private authService: AuthguardServiceService,
    private router: Router) { }
canActivate()
     {
    var isAuthenticated = this.authService.gettoken();
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
}


}
