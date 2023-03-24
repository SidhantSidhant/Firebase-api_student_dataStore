import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IuserSignUp } from 'src/app/sheard/model/student.interface';
import { ApiService } from 'src/app/sheard/service/apiService';
import { AsyncEmailValidation } from 'src/app/sheard/validations/asyncemailValidation';
import { EmailValidation } from 'src/app/sheard/validations/EmailValidation';
import { PasswordValidation } from 'src/app/sheard/validations/passwordValidations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignUpForm !: FormGroup
  constructor(private _fb: FormBuilder,
      private _apiService : ApiService,
      private _router : Router
    ) { }

  ngOnInit(): void {
    this.createSignUpForm();
    this.ValueChangesConfirmpassword()
  }
  ValueChangesConfirmpassword(){  
    this.f['password'].valueChanges.subscribe(res =>{
       if(!res){
         this.f['confirmPassword'].disable()
       }else{
         this.f['confirmPassword'].enable()
       }
    })
  }
  createSignUpForm() {
    this.SignUpForm = new FormGroup({
      userName : new FormControl(null, [Validators.required, Validators.minLength(7)]),
      email :  new FormControl(null, [Validators.required, EmailValidation.emailValid],[AsyncEmailValidation(this._apiService)]),
      password :  new FormControl(null, [Validators.required, PasswordValidation.validPassword]),
      confirmPassword : new FormControl({value : null, disabled : true}, [Validators.required, PasswordValidation.validPassword]),
    })
  }
  onSingUpForm(){
    console.log(this.SignUpForm);
      let obj : IuserSignUp = this.SignUpForm.value;
      this._apiService.SingUpUserData(obj).subscribe(res =>{
        console.log(res);
        this._router.navigate(['/forms', ""])
      })
  }
  get f(){
      return this.SignUpForm.controls
  }
}
