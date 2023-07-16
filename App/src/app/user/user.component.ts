import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent {
  constructor(private auth: AuthService) {}
  userId = this.auth.anonymousAccountID();
}
