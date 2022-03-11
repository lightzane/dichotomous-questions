import { Component, EventEmitter, Output } from '@angular/core';
import { poppear } from '../../../my-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [poppear]
})
export class HeaderComponent {

  clicked: boolean = false;

  @Output() getStarted = new EventEmitter();

  emitGetStarted(): void {
    this.clicked = true;
    this.getStarted.emit();
  }

}
