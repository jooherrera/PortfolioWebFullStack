import { Component, Input, OnInit } from '@angular/core';
import { HardSkill } from 'src/types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() info: Partial<HardSkill> = {};
  constructor() {}

  ngOnInit(): void {}
}
