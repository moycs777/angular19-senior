import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-container',
  imports: [FormsModule],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss'
})
export class ProfileContainerComponent {

  nickname = ""
}
