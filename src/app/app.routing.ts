import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./home/index/index.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'index',
        component: IndexComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);