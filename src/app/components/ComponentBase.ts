import { Component } from '@angular/core';
import { Section, SectionNames, UpdateKey } from 'src/types';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { UiService } from '../services/ui.service';
@Component({
  template: '',
})
export abstract class ComponentBase<T extends { id: number }> {
  isLogged: boolean = false;
  jwtValue: string = '';

  section: Partial<Section> = {};
  content: any;

  path: string = '';
  sectionName: string = '';

  constructor(
    public uiService: UiService,
    public profileService: ProfileService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  onUpdatedTitleValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateSectionTitle(body, this.jwtValue, this.sectionName)
      .subscribe((v) => {
        this.section = v;
      });
  }

  onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateItem(body, this.jwtValue, newValue.id!, this.path)
      .subscribe((v) => {
        let newArray = this.content.map((el: any) => {
          if (el?.id === v.id) {
            return (el = v);
          }
          return el;
        });
        this.content = newArray;
      });
  }

  onAddItem() {
    this.profileService
      .addItem(this.jwtValue, this.path)
      .subscribe((v) => this.content.push(v));
  }
  onRemoveItem(id: number) {
    this.profileService
      .deleteItem(this.jwtValue, id, this.path)
      .subscribe((v) => {
        let newArray = this.content.filter((el: any) => el.id !== id);
        this.content = newArray;
      });
  }
}
