import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashbordComponent } from "./page/component/dashbord/dashbord.component";
import { PageNotFoundComponent } from "./page/component/page-not-found/page-not-found.component";
import { AuthGrudService } from "./sheard/service/auth.service";

const router: Routes = [
    {
        path: '', loadChildren : () => import('./page/LogInModule/logIn.module').then(m1 => m1.LogInmoduleModule)
    }, {
        path: 'forms/:id',canActivate : [AuthGrudService],  loadChildren: () => import('./page/ReactiveFormModule/ReactiveForm.module').then(m1 => m1.ReactiveForms)
    }, {
        path: 'table',canActivate : [AuthGrudService],loadChildren: () => import('./page/TableModule/table.module').then(m1 => m1.TableModule)
    }, {
        path: 'page-not-found', component: PageNotFoundComponent
    }
    , {
        path: '**', redirectTo: 'page-not-found'
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}