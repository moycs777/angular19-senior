import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-component',
  imports: [NgOptimizedImage],
  templateUrl: './image-component.component.html',
  styleUrl: './image-component.component.scss'
})
export class ImageComponentComponent {
  logoUrl = 'https://picsum.photos/id/237/200/300';
  logoAlt = 'Angular logo';

}
