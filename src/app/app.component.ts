import { Component } from '@angular/core';
import { PocBoxesComponent } from './components/poc-boxes/poc-boxes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-boxes';

  navbarHeight: number = 70;

  onActivated(e: PocBoxesComponent) {
    e.navbarHeight = this.navbarHeight;
  }
}
