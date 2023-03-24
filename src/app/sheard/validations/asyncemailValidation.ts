import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map } from "rxjs";
import { ApiService } from "../service/apiService";


export function AsyncEmailValidation(apiService : ApiService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        let val = control.value;

        return apiService.getSingUpUserData().pipe(
                map(res =>{
                    const email = res.find(element => element.email === val);
                   return email ? {errorsEmailValid : 'error'} : null
                })
            )
    }
}