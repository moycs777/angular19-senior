import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  comments: string[] = ['Hello', 'World', 'Angular'];
}
