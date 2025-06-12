import { CommonModule } from '@angular/common';
import {  Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./components/banner/banner.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BannerComponent
],
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  ngOnInit(): void { }

}
