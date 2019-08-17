import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router, CanActivate,
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {map, take} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authFire: AngularFireAuth,
              private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
    return this.authFire.user.pipe(
      map(user => {
        if(!user) {
          this.router.navigate(['core','layout','login'])
        }

        return !!user;
      }),
      take(1)
    );
  }
}
