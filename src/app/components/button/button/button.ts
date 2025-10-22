import { Component, EventEmitter, Input, Output } from '@angular/core';

//reusable button component
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() type: string = '';
  @Input() description: string = '';
  @Output() userClicked = new EventEmitter<void>();

  notifyParent() {
    this.userClicked.emit();
  }
}
