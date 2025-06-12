import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {

  ngOnInit(): void { }

}
