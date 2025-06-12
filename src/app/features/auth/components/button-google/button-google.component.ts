import { CommonModule } from '@angular/common';
import { Component, input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-button-google',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button-google.component.html',
})
export class ButtonGoogleComponent implements OnInit {

  text = input<string>("Inscreva-se com o google")

  ngOnInit(): void { }

}
