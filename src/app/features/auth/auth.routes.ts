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
        path: "signup",
        loadComponent: () => import("./pages/signup/signup.component.js").then(x => x.SignupComponent)
    },
    {
        path: "**",
        redirectTo: "signin"
    }
]