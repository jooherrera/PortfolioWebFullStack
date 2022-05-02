import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() info: Partial<About> = {};
  constructor() {}

  ngOnInit(): void {}
}
