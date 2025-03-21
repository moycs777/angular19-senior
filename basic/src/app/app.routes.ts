import { Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeContainerComponent,
  },
  {
    path: 'profile',
    title: 'Profile page',
    component: ProfileContainerComponent,
  },
];
