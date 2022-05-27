import { Component } from '@angular/core';

import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.fonts.css'],
})
export class AppComponent {
  title = 'Front-End-Angular';

  constructor() {}
}
