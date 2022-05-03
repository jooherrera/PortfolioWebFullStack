import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { ExpEducation } from 'src/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() info: Partial<ExpEducation> = {};
  isLogged: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}
}
