import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) }, { path: 'place', loadChildren: () => import('./place/place.module').then(m => m.PlaceModule) }, { path: 'group', loadChildren: () => import('./group/group.module').then(m => m.GroupModule) }, { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, { path: 'rule', loadChildren: () => import('./rule/rule.module').then(m => m.RuleModule) }, { path: 'meeting', loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule) }, { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
