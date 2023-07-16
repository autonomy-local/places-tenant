import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class SignOutService {
  constructor(private auth: AngularFireAuth) {}

  signOut() {
    return this.auth.signOut();
  }
}
