import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isOpenLoginModal: boolean = false;
  private loginModalState = new Subject<any>();
  private isLogged: boolean = false;
  private logState = new Subject<any>();

  constructor() {}

  closeLoginModal(): void {
    this.isOpenLoginModal = false;
    this.loginModalState.next(this.isOpenLoginModal);
  }
  openLoginModal(): void {
    this.isOpenLoginModal = true;
    this.loginModalState.next(this.isOpenLoginModal);
  }

  LoginModalState(): Observable<any> {
    return this.loginModalState.asObservable();
  }

  logIn(): void {
    this.isLogged = true;
    this.logState.next(this.isLogged);
  }
  logOut(): void {
    this.isLogged = false;
    this.logState.next(this.isLogged);
  }
  LogState(): Observable<any> {
    return this.logState.asObservable();
  }
}
