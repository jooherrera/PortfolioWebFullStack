import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { HardSkill } from 'src/types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() info: Partial<HardSkill> = {};
  isLogged: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}
}
