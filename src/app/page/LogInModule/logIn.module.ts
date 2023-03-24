import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../MaterialModule/material.module';
import { RouterModule, Routes } from '@angular/router';
import { EmailDirective } from 'src/app/sheard/Directive/email.directive';

const routes : Routes =[{
  path : '',  component : SignUpComponent
}, {
  path : 'logIn', component : LogInComponent
}]

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class LogInmoduleModule { }
