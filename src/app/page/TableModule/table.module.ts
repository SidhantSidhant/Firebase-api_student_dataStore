import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGrudService } from "src/app/sheard/service/auth.service";

import { MaterialModule } from "../MaterialModule/material.module";
import { TableComponent } from "./table/table.component";

const routes : Routes = [{
    path : '', component : TableComponent
}]

@NgModule({
    declarations :[TableComponent],
    imports : [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    exports : [],
})
export class TableModule{

}


















