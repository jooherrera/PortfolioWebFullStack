import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { SoftSkill, SoftSkillItem, UpdateKey } from 'src/types';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css'],
})
export class SoftComponent implements OnInit {
  @Input() info: Partial<SoftSkill> = {};
  items: SoftSkillItem[] = [];
  isLogged: boolean = false;
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
      console.log(this.info);
      return;
    }

    this.info = {
      ...this.info,
      [newValue.key]: newValue.value,
    };
    console.log(this.info);
  }
}
