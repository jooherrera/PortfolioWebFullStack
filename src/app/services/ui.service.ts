import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isOpenloginModal: boolean = false;
  private loginModalState = new Subject<any>();
  private isLogged: boolean = false;
  private logState = new Subject<any>();
  constructor() {}

  closeLoginModal(): void {
    this.isOpenloginModal = false;
    this.loginModalState.next(this.isOpenloginModal);
  }
  openLoginModal(): void {
    this.isOpenloginModal = true;
    this.loginModalState.next(this.isOpenloginModal);
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
