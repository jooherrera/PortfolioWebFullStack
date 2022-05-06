import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
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
  jtwValue: string = 'ABOUT COMPONENT _ JWT DE PRUEBA';

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jtwValue = v));
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
    } else {
      this.info = {
        ...this.info,
        [newValue.key]: newValue.value,
      };
    }

    this.profileService
      .updateAbout(this.info, this.jtwValue)
      .subscribe((resp) => console.log(resp));
  }
}
