import { Component, ChangeDetectionStrategy, effect } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private authService: AuthService) {
    effect(() => {
      this.isLogin = this.authService.isLoggedIn;
    });
  }
  title = 'Tenant App';
  open = false;
  isLogin = this.authService.isLoggedIn;
  toggle(open: boolean) {
    if (this.isLogin()) {
      this.open = open;
    } else {
      this.open = false;
    }
  }
  items: readonly { label: string; icon: string; path: string }[] = [
    {
      label: '申請管理',
      icon: 'tuiIconCalendarLarge',
      path: 'reservation',
    },
    {
      label: '施設管理',
      icon: 'tuiIconHomeLarge',
      path: 'place',
    },
    {
      label: '団体管理',
      icon: 'tuiIconUsersLarge',
      path: 'group',
    },
    {
      label: '会計管理',
      icon: 'tuiIconDollarSignLarge',
      path: 'account',
    },
    {
      label: '規約管理',
      icon: 'tuiIconArchiveLarge',
      path: 'rule',
    },
    {
      label: '運営会議',
      icon: 'tuiIconSmileLarge',
      path: 'meeting',
    },
    {
      label: '報告書作成',
      icon: 'tuiIconTrelloLarge',
      path: 'report',
    },
    {
      label: '設定',
      icon: 'tuiIconSettingsLarge',
      path: 'setting',
    },
  ];
  order = new Map();
}
