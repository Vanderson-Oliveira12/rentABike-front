import { ChangeDetectionStrategy, Component, ViewEncapsulation, type OnInit } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { FieldWrapperComponent } from '@shared/components/forms/field-wrapper/field-wrapper.component';
import { InputComponent } from '@shared/components/forms/input/input.component';
import { LabelComponent } from '@shared/components/forms/label/label.component';
import { ButtonGoogleComponent } from '../../components/button-google/button-google.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ButtonGoogleComponent, FieldWrapperComponent, LabelComponent, InputComponent, ButtonComponent, RouterLink],
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "class": "w-full"
  }
})
export class SignupComponent implements OnInit {

  ngOnInit(): void { }

}
