import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, SignupComponent, AuthComponent } from "./components/auth/user-registration-routes";


const routes: Routes = [

    { path: 'auth', component: LoginComponent },
    {
        path: 'auth', component: AuthComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ]   
    },
    { path: '**', redirectTo: 'auth' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
