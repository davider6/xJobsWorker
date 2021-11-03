import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  deviceId: string;

  initialConfiguration() {
    console.log('Iniciando oneSignal');
    this.oneSignal.startInit('7612d0e6-a197-45a6-9ff8-9f4ed4244f6c', '51878476605');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(( notif ) => {
      console.log('Notificacion recibida', notif);
    });
    this.oneSignal.handleNotificationOpened().subscribe(( notif ) => {
      console.log('Notificacion abierta', notif);
    });

    this.oneSignal.getIds().then( usrDev => {
      this.deviceId = usrDev.userId;
      console.log('deviceId ' + usrDev.userId);
    });
    this.oneSignal.endInit();
  }
}
