import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate>{

    returnUrl: string;

    constructor(private _router: Router,
        private _authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.returnUrl = state.url;

        return this._authService.isLoggedIn.map(
            value => {
                console.log(value);
                if (value) {
                    const roles = route.data['roles'] as Array<string>;
                    if (!this._authService.hasRoles(roles)) {
                        this._router.navigate(['/denied']);
                    }
                    return true;
                } else {
                    this._router.navigate(['/login'], {
                        queryParams: {
                            returnUrl: this.returnUrl
                        }
                    });
                    return false;
                }
            }
        );
    }

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}