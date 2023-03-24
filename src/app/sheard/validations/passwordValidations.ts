import { AbstractControl, ValidationErrors } from "@angular/forms";



export class PasswordValidation{
   static validPassword(control : AbstractControl) : null | ValidationErrors{
            let val = control.value;
        const password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(val)
        return password ? null : {passwordError : 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'}
    }
}