import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'input[customInput], textarea[customInput]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: "",
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  ngOnInit(): void { }

}
