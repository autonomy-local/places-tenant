import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Tenant App';
  open = false;
  toggle(open: boolean) {
    this.open = open;
  }
  items: readonly { label: string; icon: string }[] = [
    {
      label: '申請管理',
      icon: 'tuiIconCalendarLarge',
    },
    {
      label: '施設管理',
      icon: 'tuiIconHomeLarge',
    },
    {
      label: '団体管理',
      icon: 'tuiIconUsersLarge',
    },
    {
      label: '会計管理',
      icon: 'tuiIconDollarSignLarge',
    },
    {
      label: '規約管理',
      icon: 'tuiIconArchiveLarge',
    },
    {
      label: '運営会議',
      icon: 'tuiIconSmileLarge',
    },
    {
      label: '報告書作成',
      icon: 'tuiIconTrelloLarge',
    },
    {
      label: '設定',
      icon: 'tuiIconSettingsLarge',
    },
  ];
  order = new Map();
}
