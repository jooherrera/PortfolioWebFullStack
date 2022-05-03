import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() from: string = '';
  isLogged: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}
}
