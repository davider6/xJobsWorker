import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersDetailsPageRoutingModule } from './orders-details-routing.module';

import { OrdersDetailsPage } from './orders-details.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OrdersDetailsPageRoutingModule
  ],
  declarations: [OrdersDetailsPage]
})
export class OrdersDetailsPageModule {}
