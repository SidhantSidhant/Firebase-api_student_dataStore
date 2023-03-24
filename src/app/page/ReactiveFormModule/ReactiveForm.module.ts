import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../MaterialModule/material.module";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import {HttpClientModule} from "@angular/common/http";
const routes : Routes = [{
    path : '', component : ReactiveFormsComponent
}]

@NgModule({
    declarations : [ReactiveFormsComponent],
    imports : [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule
    ],
    exports : [ReactiveFormsComponent],
})
export class ReactiveForms{

}