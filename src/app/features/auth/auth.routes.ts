import { Route } from "@angular/router";



export const AUTH_ROUTES: Route[] = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "signin"
    },
    {
        path: "signin",
        loadComponent: () => import("./pages/signin/signin.component.js").then(x => x.SigninComponent)
    },
    {
        path: "**",
        redirectTo: "signin"
    }
]