import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Credenciales } from 'src/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() onLogin: EventEmitter<Credenciales> = new EventEmitter();
  @Input() isModalOpen = false;

  user: string = '';
  password: string = '';

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  closeLoginModal() {
    this.uiService.closeLoginModal();
  }

  onSubmit() {
    if (!this.user || !this.password) {
      alert('Campos incopletos');
      return;
    }

    const { user, password } = this;

    const credenciales: Credenciales = { user, password };
    this.onLogin.emit(credenciales);
    this.user = '';
    this.password = '';
  }
}
