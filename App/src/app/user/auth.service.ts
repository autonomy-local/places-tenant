import { Injectable, signal } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  readonly isLoggedIn = signal(false);

  getUser() {
    // todo: error handling
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn.set(true);
      } else {
        this.isLoggedIn.set(false);
      }
    });
  }
}
