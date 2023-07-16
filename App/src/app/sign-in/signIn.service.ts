import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class SignInService {
  constructor(private auth: AngularFireAuth) {}

  signInAnonymously() {
    return this.auth.signInAnonymously();
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error: Error) => {
        return error;
      });
  }
}
