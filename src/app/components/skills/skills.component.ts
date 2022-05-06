import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { HardSkill, HardSkillItem, UpdateKey } from 'src/types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() info: Partial<HardSkill> = {};
  isLogged: boolean = false;
  items: HardSkillItem[] = [];

  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.items = this.info?.items || [];
  }
  onUpdatedValue(newValue: UpdateKey) {
    if (newValue.position !== undefined) {
      this.items[newValue.position] = {
        ...this.items[newValue.position],
        [`${newValue.key}`]: newValue.value,
      };
      this.info = {
        ...this.info,
        items: this.items,
      };
      return;
    }
    this.info = {
      ...this.info,
      [newValue.key]: newValue.value,
    };
  }
}
