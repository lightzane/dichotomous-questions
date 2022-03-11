import { Component, EventEmitter, Input, Output } from '@angular/core';
import { poppear } from '../../../my-animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [poppear]
})
export class QuestionComponent {

  toggleAnim: boolean = true;

  @Input() initial: boolean = false;
  @Output() back = new EventEmitter();
  @Output() no = new EventEmitter();
  @Output() yes = new EventEmitter();

  emitNo(): void {
    this.toggleAnim = !this.toggleAnim;
    this.no.emit();
  }

  emitYes(): void {
    this.toggleAnim = !this.toggleAnim;
    this.yes.emit();
  }

  emitBack(): void {
    this.toggleAnim = !this.toggleAnim;
    this.back.emit();
  }

}
