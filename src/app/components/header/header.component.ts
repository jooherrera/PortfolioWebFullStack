import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { ProfileInfo, UpdateKey } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() info: Partial<ProfileInfo> = {};
  isLogged: boolean = false;

  jtwValue: string = 'HEADER COMPONENT _ JWT DE PRUEBA';

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jtwValue = v));
  }

  ngOnInit(): void {}

  goTo(url: string) {
    window.open(`http://${url}`, '_blank');
  }

  onUpdatedValue(newValue: UpdateKey) {
    this.info = {
      ...this.info,
      [`${newValue.key}`]: newValue.value,
    };

    this.profileService
      .updateProfile({ [`${newValue.key}`]: newValue.value }, this.jtwValue)
      .subscribe((v) => console.log('Actualizado'));
  }
}
