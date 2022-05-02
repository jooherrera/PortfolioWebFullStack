import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() info: Partial<Project> = {};
  constructor() {}

  ngOnInit(): void {}

  redirect(url: string): void {
    window.open(`http://${url}`, '_blank');
  }
}
