import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { ContactInfo, UpdateKey } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() from: string = '';
  @Input() imgProfile: string = '';
  @Input() imgBanner: string = '';
  @Input() info: Partial<ContactInfo> = {};
  isLogged: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

  ngOnInit(): void {}

  goTo(url: string) {
    window.open(`http://${url}`, '_blank');
  }

  onUpdatedValue(newValue: UpdateKey) {
    switch (newValue.key) {
      case 'name':
        this.name = newValue.value;
        break;
      case 'title':
        this.title = newValue.value;
        break;
      case 'from':
        this.from = newValue.value;
        break;
      case 'imgProfile':
        this.imgProfile = newValue.value;
        break;
      case 'imgBanner':
        this.imgBanner = newValue.value;
        break;
      default:
        this.info = {
          ...this.info,
          [newValue.key]: newValue.value,
        };
        break;
    }
    console.log('Actualizado correctamente');
    console.log(newValue);
    console.log(this.info);
  }
}
