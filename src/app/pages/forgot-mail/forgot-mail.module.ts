import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotMailPageRoutingModule } from './forgot-mail-routing.module';

import { ForgotMailPage } from './forgot-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotMailPageRoutingModule
  ],
  declarations: [ForgotMailPage]
})
export class ForgotMailPageModule {}
