import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-popemail',
  templateUrl: './popemail.component.html',
  styleUrls: ['./popemail.component.scss'],
})
export class PopemailComponent implements OnInit {

  email = '';

  constructor(private alertController: AlertController,
              private apiService: ApiService,
              private ctlPopOver: PopoverController) { }

  ngOnInit() {}

  processRequest() {
    if (!this.email || this.email.trim() === '') {
      this.presentAlert('El correo electrónico es requerido.');
      return;
    }
    if (!this.isEmail(this.email.trim())) {
      this.presentAlert('El correo electrónico no es válido.');
      return;
    }
    let passReset = {
      'entity': 'W',
      'email': this.email.trim()
    };

    this.apiService.postEvent(
      passReset,
      'resetPassword'
    )
    .subscribe( (response: any) => {
      if (response.isValid) {
        this.presentAlert('Se ha enviado un correo electrónico con las instrucciones para recuperar su contraseña.');
        this.ctlPopOver.dismiss();
      } else {
        this.presentAlert(response.errorMessage);
      }
    },
    error => {
      console.log('error en login', error);
    });
  }

  async presentAlert(messageAn: any) {
    const alert = await this.alertController.create({
      header: "Job Exchange",
      subHeader: "Olvidé mi contraseña",
      message: messageAn,
      buttons: ["OK"],
    });

    await alert.present();
  }

  isEmail(email: string): boolean {
    let serchfind: boolean;
    email = email.trim();
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(email);
    return serchfind;
  }

}
