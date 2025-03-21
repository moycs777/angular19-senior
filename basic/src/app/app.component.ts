import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector:'app-user',
  template:`<h1>I am user am I logged? {{isUserLoggedIn}}</h1>
    @if(isUserLoggedIn) {
      <p>Yes</p>
    }
    @else {
      <p>No</p>
    }

    <p>edit my name:</p>
    <div [contentEditable]="isNameEditable"></div>
  `,

})
export class UserComponent {
  isUserLoggedIn: boolean = true
  isNameEditable: boolean = true
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic';
}
