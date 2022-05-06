import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Project, ProjectItem, UpdateKey } from 'src/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() info: Partial<Project> = {};
  isLogged: boolean = false;
  items: ProjectItem[] = [];
  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.items = this.info?.items || [];
  }

  redirect(url: string): void {
    window.open(`http://${url}`, '_blank');
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
