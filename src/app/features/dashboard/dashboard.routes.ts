import { Route } from "@angular/router";


export const DASHBOARD_ROUTES: Route[] = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        loadComponent: () => import("./pages/home/home.component").then(x => x.HomeComponent)
    },
    {
        path: "**",
        redirectTo: "home"
    }
];