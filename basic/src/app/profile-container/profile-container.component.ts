import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-container',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
})
export class ProfileContainerComponent {
  nickname = '';

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit(): void {
    console.log(this.profileForm.value);
    console.log(this.profileForm.controls.name.value);
    console.log(this.profileForm.controls.email.value);
  }
}
