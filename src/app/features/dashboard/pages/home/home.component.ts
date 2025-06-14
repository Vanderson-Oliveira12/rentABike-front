import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";

@Component({
  selector: 'app-home',
  imports: [ContainerComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  ngOnInit(): void { }

}
