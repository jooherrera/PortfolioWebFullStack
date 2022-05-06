import { Component } from '@angular/core';
import { Profile } from 'src/types';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.fonts.css'],
})
export class AppComponent {
  title = 'Front-End-Angular';
  profileInfo: Partial<Profile> = {};
  constructor(private profile: AuthService) {
    this.profile.getProfile().subscribe((resp) => {
      this.profileInfo = resp;
    });
  }
}
