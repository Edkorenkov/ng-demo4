
import { Injectable } from "@angular/core";

import AuthService from "../auth.service";


@Injectable()
export default class LoginGuard {

    constructor(authService: AuthService) {

        this._authService = authService;

    };

    canActivate(ActivatedRouteSnapshot) {

        return this._authService.IsLogged();

    };

}