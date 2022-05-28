import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { Credenciales } from 'src/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen = false;

  email: string = '';
  password: string = '';

  isLoginError = false;

  constructor(private uiService: UiService, private authService: AuthService) {
    this.authService
      .LoginErrorState()
      .subscribe((v) => (this.isLoginError = v));
  }

  ngOnInit(): void {}

  closeLoginModal() {
    this.uiService.closeLoginModal();
  }

  onSubmit() {
    const { email, password } = this;

    if (!email || !password) {
      alert('Campos incopletos');
      return;
    }

    const credenciales: Credenciales = { email, password };
    this.authService.login(credenciales);
    this.email = '';
    this.password = '';
  }
}
