import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Output() addEvent = new EventEmitter()
  counter = 0

  add(): void {
    this.counter++
    this.addEvent.emit(this.counter)
  }

}
