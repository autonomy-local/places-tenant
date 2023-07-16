import { Component, OnInit, effect } from '@angular/core';
import { SignInService } from './signIn.service';
import { AuthService } from '../user/auth.service';
import { SignOutService } from '../sign-out/signOut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent implements OnInit {
  constructor(
    private signInService: SignInService,
    private signOutService: SignOutService,
    private authService: AuthService,
    private router: Router
  ) {
    effect(() => {
      if (this.authService.isLoggedIn()) {
        this.isLoading = false;
        this.router.navigate(['/user']);
      }
    });
  }

  isLoading = false;

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      // todo: error handle
      this.signOutService.signOut();
    }
  }

  signInAnonymously(): void {
    // todo: error handle
    this.isLoading = true;
    this.signInService.signInAnonymously().then(() => {
      this.authService.getUser();
    });
  }
}
