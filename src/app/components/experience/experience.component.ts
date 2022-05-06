import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { ExpEducation, ExpEducationItem, UpdateKey } from 'src/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() info: Partial<ExpEducation> = {};
  items: ExpEducationItem[] = [];

  isLogged: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.items = this.info?.items || [];
  }

  onUpdatedValue(newValue: UpdateKey) {
    if (newValue.id !== undefined) {
      this.items.map((item) => {
        if (item.id === newValue.id) {
          item[`${newValue.key}`] = newValue.value;
        }
      });
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
