import { Component } from '@angular/core';
import { AuthService } from './auth.service';

type stepperState = 'error' | 'normal' | 'pass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent {
  constructor(private auth: AuthService) {}
  userId = this.auth.anonymousAccountID();
  isAnonymous = this.auth.isAnonymous();
  items: {
    state: stepperState;
    icon: string;
    disabled: boolean;
    label: string;
  }[] = [
    {
      state: 'normal',
      icon: 'tuiIconUserLarge',
      disabled: false,
      label: 'アカウント情報を登録',
    },
    {
      state: 'normal',
      icon: 'tuiIconHomeLarge',
      disabled: false,
      label: '施設情報を登録',
    },
    {
      state: 'error',
      icon: 'tuiIconArchiveLarge',
      disabled: true,
      label: '規約情報を登録',
    },
    {
      state: 'normal',
      icon: 'tuiIconUsersLarge',
      disabled: false,
      label: '団体情報を登録',
    },
    {
      state: 'normal',
      icon: 'tuiIconCalendarLarge',
      disabled: false,
      label: '申請情報を登録',
    },
    {
      state: 'error',
      icon: 'tuiIconDollarSignLarge',
      disabled: false,
      label: '会計情報を登録',
    },
    {
      state: 'error',
      icon: 'tuiIconSmileLarge',
      disabled: true,
      label: '運営会議情報を登録',
    },
    {
      state: 'error',
      icon: 'tuiIconTrelloLarge',
      disabled: true,
      label: '報告書情報を登録',
    },
    {
      state: 'error',
      icon: 'tuiIconSettingsSignLarge',
      disabled: false,
      label: '設定情報を登録',
    },
  ];
}
