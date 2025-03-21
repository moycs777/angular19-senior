import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommentsComponent } from './comments/comments.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { UserService } from './services/user.service';
import { WheaterService } from './services/wheater.service';

@Component({
  selector:'app-user',
  template:`<h1>I am {{name}} am I logged? {{isUserLoggedIn}}</h1>
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
  @Input() name: string = "";
  isUserLoggedIn: boolean = true
  isNameEditable: boolean = true
}


@Component({
standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, CounterComponent, CommentsComponent, ImageComponentComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic';
  counter = 0

  userService = inject(UserService)

  constructor(private wheaterService: WheaterService){
    this.userService.sayHi()
  }

  greet (): void {
    alert("Hi!!!!!")
  }

  onMOuseOver(): void {
    // alert("the mouse is over me")
  }

  onAdd(count: number) {
    console.log('Counter value:', count);
    this.counter = count
  }
}
