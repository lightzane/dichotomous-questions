import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answered',
  templateUrl: './answered.component.html',
  styleUrls: ['./answered.component.scss']
})
export class AnsweredComponent {

  @Input() answer: string;
  @Input() index: number;

}
