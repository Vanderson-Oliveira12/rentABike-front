import { Component, computed, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./components/nav/nav.component";
import { AsideComponent } from "./components/aside/aside.component";
import { iMenu } from "./interfaces/menu.interface";
import { AsideService } from "./components/aside/aside.service";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-dashboard",
    imports: [RouterOutlet, NavComponent, AsideComponent, NgClass],
    standalone: true,
    templateUrl: "./dashboard.component.html"

})

export class DashboardComponent {
    private asideService = inject(AsideService);

    isAsideOpened = this.asideService.isOpened;

    menuClass = computed(() => {
        const baseClass = "grid"
        const mobileClass = "grid-cols-[1fr]";
        const lgClass = this.isAsideOpened() ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[0px_1fr]";  


        return `${baseClass} ${mobileClass} ${lgClass}`;
    });

    menus = signal<iMenu[]>(
        [
            {
                title: "Home",
                path: "",
                iconUri: "assets/icons/home-4-line.svg",
            },
            {
                title: "Estações",
                path: "",
                iconUri: "assets/icons/map-pin-line.svg",
            },
            {
                title: "Meus aluguéis",
                path: "",
                iconUri: "assets/icons/copper-coin-line.svg",
            },
            {
                title: "Meu perfil",
                path: "",
                iconUri: "assets/icons/user-line.svg",
            }
        ]
    )
}
