import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector:'app-user',
  template:'<h1>I am user</h1>',

})
export class UserComponent {}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic';
}
