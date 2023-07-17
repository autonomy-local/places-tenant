import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {
    path: 'reservation',
    loadChildren: () =>
      import('./components/reservation/reservation.module').then(
        (m) => m.ReservationModule
      ),
  },
  {
    path: 'place',
    loadChildren: () =>
      import('./components/place/place.module').then((m) => m.PlaceModule),
  },
  {
    path: 'group',
    loadChildren: () =>
      import('./components/group/group.module').then((m) => m.GroupModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./components/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: 'rule',
    loadChildren: () =>
      import('./components/rule/rule.module').then((m) => m.RuleModule),
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./components/meeting/meeting.module').then(
        (m) => m.MeetingModule
      ),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./components/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./components/setting/setting.module').then(
        (m) => m.SettingModule
      ),
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/register',
    component: UserRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
