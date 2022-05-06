import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { About, UpdateKey } from 'src/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() info: Partial<About> = {};
  items: string[] = [];
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
      console.log('estoy aca');
      this.items[newValue.position] = newValue.value;
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
