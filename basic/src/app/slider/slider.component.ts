import { Component, model } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  value = model(0)

  increment(): void {
    this.value.update(oldVal => oldVal + 1 )
  }

}
