import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-red-social',
  templateUrl: './btn-red-social.component.html',
  styleUrls: ['./btn-red-social.component.css'],
})
export class BtnRedSocialComponent implements OnInit {
  @Input() imageURL: string = '';
  @Input() alt: string = '';

  constructor() {}

  ngOnInit(): void {}
}
