import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

type stepperState = 'error' | 'normal' | 'pass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private analytics: AngularFireAnalytics
  ) {}
  userId = this.auth.anonymousAccountID();
  isAnonymous = this.auth.isAnonymous();
  items: {
    state: stepperState;
    icon: string;
    disabled: boolean;
    label: string;
    path: string;
  }[] = [
    {
      state: 'normal',
      icon: 'tuiIconUserLarge',
      disabled: false,
      label: 'アカウント情報を登録',
      path: '/user/register',
    },
    {
      state: 'normal',
      icon: 'tuiIconHomeLarge',
      disabled: false,
      label: '施設情報を登録',
      path: '/place/register',
    },
    {
      state: 'error',
      icon: 'tuiIconArchiveLarge',
      disabled: true,
      label: '規約情報を登録',
      path: 'rule/register',
    },
    {
      state: 'normal',
      icon: 'tuiIconUsersLarge',
      disabled: false,
      label: '団体情報を登録',
      path: '/group/register',
    },
    {
      state: 'normal',
      icon: 'tuiIconCalendarLarge',
      disabled: false,
      label: '申請情報を登録',
      path: '/reservation/register',
    },
    {
      state: 'error',
      icon: 'tuiIconDollarSignLarge',
      disabled: false,
      label: '会計情報を登録',
      path: '/account/register',
    },
    {
      state: 'error',
      icon: 'tuiIconSmileLarge',
      disabled: true,
      label: '運営会議情報を登録',
      path: '/meeting/register',
    },
    {
      state: 'error',
      icon: 'tuiIconTrelloLarge',
      disabled: true,
      label: '報告書情報を登録',
      path: '/report/register',
    },
    {
      state: 'error',
      icon: 'tuiIconSettingsSignLarge',
      disabled: false,
      label: '設定情報を登録',
      path: '/setting/register',
    },
  ];
  ngOnInit(): void {
    this.analytics.logEvent('user_page_opened', {
      isAnonymous: this.isAnonymous,
      userId: this.userId,
    });
  }
}
