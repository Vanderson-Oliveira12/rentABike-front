import { computed, inject, Inject, Injectable, signal } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Injectable({
    providedIn: "root"
})
export class AsideService {
    private breadpointObserver = inject(BreakpointObserver)
    private _isOpened = signal<boolean>(true);

    isOpened = computed(() => this._isOpened());

    constructor() {
    this.breadpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe({
        next: (result ) => {
            if(result.matches) {
                this._isOpened.set(false)
            } else {
                this._isOpened.set(true)
            }
        }
    })
        
    }

    onToggle() {
        const opened = !this._isOpened();
        this._isOpened.set(opened);
    }
 }