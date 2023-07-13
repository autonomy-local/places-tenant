import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) }, { path: 'place', loadChildren: () => import('./place/place.module').then(m => m.PlaceModule) }, { path: 'group', loadChildren: () => import('./group/group.module').then(m => m.GroupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
