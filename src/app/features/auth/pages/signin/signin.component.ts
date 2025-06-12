import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ButtonGoogleComponent } from "../../components/button-google/button-google.component";
import { InputComponent } from "../../../../shared/components/forms/input/input.component";
import { FieldWrapperComponent } from "../../../../shared/components/forms/field-wrapper/field-wrapper.component";
import { LabelComponent } from "../../../../shared/components/forms/label/label.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ButtonGoogleComponent,
    InputComponent,
    FieldWrapperComponent,
    LabelComponent,
    ButtonComponent
],
  templateUrl: './signin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {

  ngOnInit(): void { }

}
