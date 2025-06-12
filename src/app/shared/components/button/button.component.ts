import { Component, HostBinding, Input, type OnInit } from '@angular/core';

type TButtonVariant =
  | 'primary'
  | 'danger'
  | 'disabled';

@Component({
  selector: 'button[customButton]',
  imports: [],
  template: "<ng-content></ng-content>",
  standalone: true,
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  private _variant: TButtonVariant = 'primary';

  @Input()
  set variant(value: TButtonVariant) {
    this._variant = value || 'primary';
  }

  get variant(): TButtonVariant {
    return this._variant;
  }

  ngOnInit(): void { }

  @HostBinding('attr.data-variant')
  get dataVariant() {
    return this._variant;
  }

}
