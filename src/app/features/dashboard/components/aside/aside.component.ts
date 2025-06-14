import { ChangeDetectionStrategy, Component, computed, inject, input, type OnInit } from '@angular/core';
import { iMenu } from '../../interfaces/menu.interface';
import { RouterLink } from '@angular/router';
import { SvgComponent } from "../../../../shared/components/svg/svg.component";
import { AsideService } from './aside.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-aside',
  imports: [RouterLink, SvgComponent, NgClass],
  templateUrl: './aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent implements OnInit {
  private asideService = inject(AsideService);


  menus = input<iMenu[]>([]);

  isAsideOpened = this.asideService.isOpened;


  menuClass = computed(() => {
    if (this.isAsideOpened()) 
      { 

        return "left-0";
      } 
    else {
            
      return "left-[-100%] lg:left-0";
    }
  });


  onToggle() {
    this.asideService.onToggle();
  }

  ngOnInit(): void { }

}
