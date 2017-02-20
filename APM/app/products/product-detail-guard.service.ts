import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router  } from '@angular/router'
@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.params['id'];
        if (isNaN(id) || id < 1) {
            alert('product id should be valid');
            this._router.navigate(['/welcome']);
            return false;
        }
        return true;
    }
}