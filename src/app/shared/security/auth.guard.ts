import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private session: SessionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.session.getUser()) {
      let target = 'login';
      let extras: NavigationExtras = {};
      if (route?.routeConfig?.path) {
        extras.queryParams = {redirect: route.routeConfig.path};
      }
      this.router.navigate([target], extras);
      return false;
    }
    return true;
  }
}
