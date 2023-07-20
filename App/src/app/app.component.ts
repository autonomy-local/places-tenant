import {
  Component,
  ChangeDetectionStrategy,
  effect,
  OnInit,
} from '@angular/core';
import { AuthService } from './components/user/auth.service';
import { RxDBService } from './infra/RxDB/rxDB.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private rxDB: RxDBService) {
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

  async ngOnInit(): Promise<void> {
    this.rxDB.init();
  }
}
