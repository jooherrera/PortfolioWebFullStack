import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  goTo(Title: string) {
    window.open(this.links[Title], '_blank');
  }
}
