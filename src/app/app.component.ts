import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('wrapper') domContainer: ElementRef<HTMLDivElement>;

  scrollToBottom(): void {
    const dom = this.domContainer;
    setTimeout(() => {
      dom.nativeElement.scrollTop = dom.nativeElement.scrollHeight;
    });
  }
}
