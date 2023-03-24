import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmailValidation{
    constructor(){}
    static emailValid(control : AbstractControl):null | ValidationErrors{
        let val = control.value;
        const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,9}))$/.test(val);
        return !email ? {emailError : 'please enter proper Email Address'} : null
    }
}
