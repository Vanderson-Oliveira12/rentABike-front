import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, TemplateRef, type OnInit } from '@angular/core';
import { AsideService } from '../aside/aside.service';

@Component({
  selector: 'app-nav',
  imports: [NgTemplateOutlet],
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  private asideService = inject(AsideService);

  onToggle() {
    this.asideService.onToggle();
  }

  ngOnInit(): void { }

}
