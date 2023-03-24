import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { EmailValidation } from "../validations/EmailValidation";

@Directive({
    selector : '[email]',
    providers : [{
    provide : NG_VALIDATORS,
    useExisting : EmailDirective,
    multi : true        
    }]
})
export class EmailDirective implements Validator{

    validate(control : AbstractControl) :null | ValidationErrors {
         let val = control.value;
         const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,9}))$/.test(val);
        return !email ? {emailError : 'please enter proper Email Address'} : null
    }
}