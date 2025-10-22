import { Component , Input, Output, EventEmitter} from '@angular/core';

//this is an easteregg
@Component({
  selector: 'app-easteregg',
  imports: [],
  templateUrl: './easteregg.html',
  styleUrl: './easteregg.css'
})
export class Easteregg {
  @Input() set show(value: boolean) {
    if(value) {
      this.open();
    } else {
      this.close();
    }
  }

  @Output() closed = new EventEmitter<void>();

  isOpen = false;

  open() { 
    this.isOpen = true;
  }
  close() { 
    this.isOpen = false; this.closed.emit(); 
  }
  
}
