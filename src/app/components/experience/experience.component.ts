import { Component, Input, OnInit } from '@angular/core';
import { ExpEducation } from 'src/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() info: Partial<ExpEducation> = {};
  constructor() {}

  ngOnInit(): void {}
}
