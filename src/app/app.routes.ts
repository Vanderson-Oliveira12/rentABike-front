import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './features/auth/auth.routes.js';
import { AuthComponent } from './features/auth/auth.component.js';
import { DashboardComponent } from './features/dashboard/dashboard.component.js';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        loadChildren: () => import("./features/auth/auth.routes.js").then(x => x.AUTH_ROUTES)
    },
    {
        path: "dashboard",
        loadComponent: () => import("./features/dashboard/dashboard.component.js").then(x => x.DashboardComponent),
        loadChildren: () => import("./features/dashboard/dashboard.routes.js").then(x => x.DASHBOARD_ROUTES)
    },
    {
        path: "**",
        redirectTo: "signin"
    }
];
