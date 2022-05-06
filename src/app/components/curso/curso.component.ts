import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Curso, SchoolItem, UpdateKey } from 'src/types';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  @Input() info: Partial<Curso> = {};
  isLogged: boolean = false;
  items: SchoolItem[] = [];

  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}
  ngOnChanges() {
    this.items = this.info?.schools || [];
  }

  redirect(url: string): void {
    window.open(`http://${url}`, '_blank');
  }

  onUpdatedValue(newValue: UpdateKey) {}
}
