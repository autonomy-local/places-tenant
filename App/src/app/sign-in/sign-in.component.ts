import { Component, OnInit } from '@angular/core';
import { SignInService } from './signIn.service';
import { AuthService } from '../user/auth.service';
import { SignOutService } from '../sign-out/signOut.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent implements OnInit {
  constructor(
    private signInService: SignInService,
    private signOutService: SignOutService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      // todo: error handle
      this.signOutService.signOut();
    }
  }

  signInAnonymously(): void {
    // todo: error handle
    this.signInService.signInAnonymously().then(() => {
      this.authService.getUser();
    });
  }
}
