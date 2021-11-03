import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotMailPage } from './forgot-mail.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotMailPageRoutingModule {}
