
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from  "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule
    ],
})
export class MaterialModule {

} 