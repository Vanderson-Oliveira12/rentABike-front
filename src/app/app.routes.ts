import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './features/auth/auth.routes.js';
import { AuthComponent } from './features/auth/auth.component.js';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        loadChildren: () => import("./features/auth/auth.routes.js").then(x => x.AUTH_ROUTES)
    }
];
