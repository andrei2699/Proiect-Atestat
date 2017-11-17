import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    returnUrl: string;

    constructor(private _router: Router,
        private _authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.returnUrl = state.url;

        if (this.checkLogin(this.returnUrl)) {
            const roles = route.data['roles'] as Array<string>;
            if (!this._authService.hasRoles(roles)) {
                this._router.navigate(['/denied']);
            }
            return true;

        }
        return false;
    }

    checkLogin(url): boolean {
        if (this._authService.loggedIn()) {
            return true;
        }

        this._router.navigate(['/login'], {
            queryParams: {
                returnUrl: this.returnUrl
            }
        });
        return false;
    }
}
