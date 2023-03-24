import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./apiService";
// import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, single } from "rxjs";
// import { ApiService } from "./apiService";
// import { AuthService } from "./auth.service";



@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn: boolean = false;
 

    constructor(
        private _apiservice: ApiService,
        private _router: Router
    ) { }
    
    isSingUpUser(){
        this.isLoggedIn = true;
    }

    Authentication(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.isLoggedIn = localStorage.getItem('email') ? true : false;
            resolve(this.isLoggedIn);
        })
    }

    isLoggedInstatus() {
        return this.isLoggedIn;
    }

    isUserLogIn(obj: { email: string, password: string }) {
        this._apiservice.getSingUpUserData().subscribe(res => {
            let singleObj = res.find(element => {
                return element.email === obj.email && element.password === element.password
            })
            if (singleObj) {
                this.isLoggedIn = true;
                localStorage.setItem('email', singleObj.email);
                localStorage.setItem('userName', singleObj.password);
                this._router.navigate(['/table']);
            } else {
                this._apiservice.snackbar('Please Enter The Proper Email Address', 'ok')
            }
        })
    }

    isUserLogOut() {
        this.isLoggedIn = false;
        localStorage.removeItem('email');
        localStorage.removeItem('userName');
    }
}



@Injectable({
    providedIn: 'root'
})
export class AuthGrudService implements CanActivate {
    constructor(private _authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this._authService.Authentication().then(res => {
            console.log(res);
            if (res) {
                return true;
            } else {
                return false;
            }
        })

    }

}