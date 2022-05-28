import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { environment } from 'src/environments/environment';

type Links = {
  [key: string]: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  env = environment.env;
  links: Links = {
    Github: environment.urlGithub,
    Linkedin: environment.urlLinkedin,
  };
  showLoginModal: boolean = false;
  isLogged: boolean = false;
  subscription?: Subscription;
  subscriptionLog?: Subscription;

  constructor(private uiService: UiService, private authService: AuthService) {
    this.subscription = this.uiService
      .LoginModalState()
      .subscribe((v) => (this.showLoginModal = v));
    this.subscriptionLog = this.uiService
      .LogState()
      .subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {
    //Borrar esto
    // this.uiService.logIn();
  }

  goTo(Title: string) {
    window.open(this.links[Title], '_blank');
  }
  openLoginModal() {
    if (this.isLogged) {
      this.uiService.logOut();
      return;
    }
    this.uiService.openLoginModal();
  }
}
