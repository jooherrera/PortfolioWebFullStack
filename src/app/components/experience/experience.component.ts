import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
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
  @Input() isExperiencia: boolean = false;
  jwtValue: string = 'EXP COMPONENT _ JWT DE PRUEBA';

  isLogged: boolean = false;
  constructor(
    private uiService: UiService,
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
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

      this.profileService
        .updateExp({ items: this.items }, this.jwtValue)
        .subscribe((v) => console.log('Actualizado'));

      this.info = {
        ...this.info,
        items: this.items,
      };
      return;
    }

    this.info = {
      ...this.info,
      [newValue.key]: newValue.value,
    };

    this.profileService
      .updateExp({ [newValue.key]: newValue.value }, this.jwtValue)
      .subscribe((v) => console.log('Actualizado'));
  }

  onAddItem() {
    if (this.isExperiencia) {
      this.profileService.addExpItem(this.jwtValue);
    }
  }
  onRemoveItem(id: number) {
    console.log(id);
  }
}
