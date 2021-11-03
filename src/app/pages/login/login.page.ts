import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { NavController, AlertController, ActionSheetController, PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
import { PopemailComponent } from '../../components/popemail/popemail.component';
import { PushService } from '../../push.service';
import { Workers } from '../../models/dto/Workers';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  GOOGLE: string = 'G';
  FACEBOOK: string = 'F';
  EMAIL: string = 'N';

  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private authService: AuthService,
               private fb: Facebook,
               private googlePlus: GooglePlus,
               private platform: Platform,
               private apiService: ApiService,
               private alertController: AlertController,
               private actionSheetController: ActionSheetController,
               private ionicStorage: Storage,
               public popoverController: PopoverController,
               private pushService: PushService ) {
                if (!pushService.deviceId){
                  pushService.initialConfiguration();
                }
              }

  ngOnInit() {
  }

  signInWithGoogle( registry: boolean = false ){

    this.apiService.cleanStorage();

    this.googlePlus.login({
      'webClientId': '51878476605-8ebudbmq2fef0cu0qcepvkfjdgr2229o.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
        //console.log('google signin',res);
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( user => {

          //console.log('firebase auth',user);

          this.apiService.externalExists( user.user.uid, this.GOOGLE)
          .subscribe( resp => {

            this.authService.cargarUsuario(
              user.user.displayName,
              user.user.email,
              user.user.photoURL,
              user.user.uid,
              'google' 
            );

            //existe en la plataforma
            if ( resp['exists'] ){

              //si la respuesta es verdadera y me quiero registrar
              if ( registry ){    
                
                this.apiService.cleanStorage();
                
                this.presentAlert(
                  `El usuario ya se encuentra registrado en la plataforma.`
                );
              } else { //si existe y se quiere loguear que pase adelante

                let auth = {
                  'entity': 'W',
                  'type': this.GOOGLE,
                  'username': user.user.uid,
                  'deviceId': this.pushService.deviceId
                };

                this.apiService.postEvent(
                  auth,
                  'auth'
                )
                .subscribe( (login: any) => {
                  this.ionicStorage.set("token", login.token);
                  this.ionicStorage.set("userId", login.clientId);
                  // this.apiService.saveStorage( 'auth-token', login.token );
                  // this.apiService.saveStorage( 'userId', login.clientId );

                  this.apiService.getEvent(
                    `workers/${ login.clientId }`,
                    login.token
                  ).subscribe( (usr) => {
                    const respWorker: Workers = usr as Workers;
                    this.ionicStorage.set("workerObject", JSON.stringify(respWorker));
                    // this.apiService.saveStorage( 'workerObject', JSON.stringify(usr) );

                    this.router.navigate(['/home']);

                  }, (err) => {
                    console.log('Error obteniendo información del usuario');
                  });
                },
                error => {
                  console.log('error en login', error);
                });
              }

            //si no existe en la plataforma
            } else {

              //si me quiero registrar
              if ( registry ){
                this.router.navigate(['/registry']);
              } else { //si no existe y se quiere loguear

                this.apiService.cleanStorage();

                this.presentAlert(
                  `El usuario no se encuentra registrado en la plataforma.`
                );
              }
            }
          }, (err) => {
            console.log('error en el logueo', err);
          });

        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: " + JSON.stringify(err)));
  }

  signInWithFacebook(registry: boolean = false ){
    
    console.log("1");

    this.apiService.cleanStorage();

    console.log("2");

    if (this.platform.is('cordova')) {

      console.log("2.5");

      return this.fb.login(['email', 'public_profile']).then(res => {

        console.log('login',res);

        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then( res => {

          console.log('signInWithCredential',res);

          this.apiService.externalExists( res.user.uid, this.FACEBOOK )
          .subscribe( resp => {

            console.log('externalExists',resp);

            this.authService.cargarUsuario(
              res.user.displayName,
              res.user.email,
              res.user.photoURL,
              res.user.uid,
              'facebook' 
            );
    
            //existe en la plataforma
            if ( resp['exists'] ){

              //si la respuesta es verdadera y me quiero registrar
              if ( registry ){         
                
                this.apiService.cleanStorage();
                
                this.presentAlert(
                  `El usuario ya se encuentra registrado en la plataforma.`
                );
              } else { //si existe y se quiere loguear que pase adelante

                let auth = {
                  'entity': 'W',
                  'type': this.FACEBOOK,
                  'username': res.user.uid,
                  'deviceId': this.pushService.deviceId
                };

                this.apiService.postEvent(
                  auth,
                  'auth'
                )
                .subscribe( (login: any) => {
                  console.log('auth',login);
                  this.ionicStorage.set("token", login.token);
                  this.ionicStorage.set("userId", login.clientId);
                  // this.apiService.saveStorage( 'auth-token', login.token );
                  // this.apiService.saveStorage( 'userId', login.clientId );

                  this.apiService.getEvent(
                    `workers/${ login.clientId }`,
                    login.token
                  ).subscribe( (usr) => {
                    this.ionicStorage.set("workerObject", JSON.stringify(usr));
                    // this.apiService.saveStorage( 'workerObject', JSON.stringify(usr) );

                    this.router.navigate(['/home']);
                    
                  }, (err) => {
                    console.log('Error obteniendo información del usuario');
                  });
                },
                error => {
                  console.log('error en login', error);
                });
              }

            //si no existe en la plataforma
            } else {

              //si me quiero registrar
              if ( registry ){
                console.log("no existe en la plataforma, si me quiero registrar con facebook");
                this.router.navigate(['/registry']);
              } else { //si no existe y se quiere loguear

                this.apiService.cleanStorage();

                this.presentAlert(
                  `El usuario no se encuentra registrado en la plataforma.`
                );
              }
            }

          }, (err) => {
            console.log('error en el logueo', err);
          });
        })
        .catch( err => console.log('Error en autenticación con facebook', JSON.stringify(err)));
      }).catch( err => console.log('Err',err));
    }else{
      console.log("3");
      this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() )
      .then( res => {

        console.log("res",res);

        this.authService.cargarUsuario(
          res.user.displayName,
          res.user.email,
          res.user.photoURL,
          res.user.uid,
          'facebook' 
        );

        this.router.navigate(['/home']);

      })
      .catch( err => console.log(err));
    } 
  }

  async presentAlert( message: any ) {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión',
      subHeader: 'Jobs Exchange',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

  }

  signInWithEmail( form: any ){

    this.apiService.cleanStorage();

    if ( form.value.email === '' ){
      this.presentAlert(
        `El email no ha sido ingresado.`
      );
    } else if ( form.value.password === '' ) {
      this.presentAlert(
        `La contraseña no ha sido ingresada.`
      );
    } else {
      this.apiService.internalExists( form.value.email, form.value.password, this.EMAIL )
      .subscribe( resp => {
        if (resp['isValid']){
          let auth = {
            'entity': 'W',
            'type': this.EMAIL,
            'username': form.value.email,
            'password': form.value.password,
            'deviceId': this.pushService.deviceId
          };

          this.apiService.postEvent(
            auth,
            'auth'
          )
          .subscribe( (login: any) => {


            console.log('login',login);

            this.ionicStorage.set("token", login.token);
            this.ionicStorage.set("userId", login.clientId);

            this.apiService.getEvent(
              `workers/${ login.clientId }`,
              login.token
            ).subscribe( (usr) => {

              const respWorker: Workers = usr as Workers;
              
              this.ionicStorage.set("workerObject", JSON.stringify(respWorker));
              console.log('workerObject',respWorker);

              this.authService.cargarUsuario(
                usr['fullName'],
                form.value.email,
                usr['profileImage'],
                "",
                'email' 
              );

              if ( usr['firstLogin'] ){
                this.router.navigate(['/categories']);
              } else {
                if (login.passwordReset) {
                  this.router.navigate(['/forgot-mail']);
                } else{
                  this.router.navigate(['/home']);
                }
              }
            }, (err) => {
              console.log('Error obteniendo información del usuario');
            });

          },
          error => {
            console.log('error en login', error);
          });

        } else {
          this.presentAlert(
            `Usuario o contraseña inválido.`
          );
        }
      }); 
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Registrate con nostros',
      cssClass: 'action-sheets-groups-page',
      buttons: [{
        text: 'Utiliza tu correo electrónico',
        role: 'destructive',
        icon: 'mail',
        handler: () => {
          console.log('E-mail clicked');
          this.router.navigate(['/registry']);
        }
      }, {
        text: 'Utiliza tu cuenta de facebook',
        icon: 'logo-facebook',
        cssClass: 'FacebookIcon',
        handler: () => {
          // console.log('Facebook clicked');
          this.signInWithFacebook( true )
        }
      }, {
        text: 'Utiliza tu cuenta de Google',
        icon: 'logo-google',
        cssClass: 'GoogleIcon',
        handler: () => {
          // console.log('Google clicked');
          this.signInWithGoogle( true );
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async forgotPasswordMail(ev: any) {
    const popover = await this.popoverController.create({
      component: PopemailComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
