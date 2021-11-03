import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
import { Workers } from '../../models/dto/Workers';

@Component({
  selector: 'app-forgot-mail',
  templateUrl: './forgot-mail.page.html',
})
export class ForgotMailPage implements OnInit {

  constructor( private router: Router,
               private apiService: ApiService,
               private alertController: AlertController,
               private ionicStorage: Storage) {
                this.start();
  }

  worker: Workers;

  workerId: number;

  ngOnInit() {
  }

  async start() {
    //console.log('session',sessionStorage.getItem("userId"));
    const stringObj = await this.ionicStorage.get("workerObject");
    this.worker = JSON.parse(stringObj);

    this.workerId = this.worker.id;
  }

  async presentAlert( message: any ) {
    const alert = await this.alertController.create({
      header: 'Password Change',
      subHeader: 'Jobs Exchange',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

  }

  signInWithEmail( form: any ){
    if ( form.value.password === '' ){
      this.presentAlert(
        `Debe ingresar contraseña nueva.`
      );
    } else if ( form.value.confirmation === '' ) {
      this.presentAlert(
        `Debe ingresar confirmacion de contraseña.`
      );
    }  else if ( form.value.password !== form.value.confirmation ) {
      this.presentAlert(
        `Las contraseñas deben coincidir.`
      );
    } else {
      console.log('WorkerID ' + this.worker + ' workerId ' + this.workerId );
      const passReset = {
        'password': form.value.password,
        'workerId': this.worker.id,
      };
      console.log('passReset', passReset);
      this.apiService.postEvent(
        passReset,
        'changePassword'
      )
      .subscribe( (response: any) => {
        if (response.isValid) {
          this.presentAlert('Password Changed.');
          this.router.navigate(['/home']);
        } else {
          this.presentAlert(response.errorMessage);
        }
      },
      error => {
        console.log('error en login', error);
      });
    }
  }

}
