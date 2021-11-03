import { Component, OnInit, Input } from '@angular/core';
import { AuthService, Credenciales } from '../../services/auth.service';
import { auth } from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Worker } from "../../models/worker";
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  GOOGLE: string = 'G';
  FACEBOOK: string = 'F';
  EMAIL: string = 'N';

  user: Credenciales;

  //Campos del formulario
  public fullName: string;
  public email: string;
  public experience: string = 'N';
  public status: boolean = true;
  private workerType: string = "N";
  public imgProfile: string = "";
  private externalId: string = "";
  private latitude: string;
  private longitude: string;

  automaticClose: boolean = false;

  constructor( private authService: AuthService,
               private alertController: AlertController,
               private router: Router,
               private api: ApiService,
               private ionicStorage: Storage,
               private geolocation: Geolocation ) { 

    if ( authService.usuario.email ) {
      this.user = authService.usuario;
      this.fullName = this.user.nombre;
      this.email = this.user.email;
      this.workerType = ( ( this.user.provider === 'google' ) ? this.GOOGLE : this.FACEBOOK );
      this.imgProfile = this.user.imagen;
      this.externalId = this.user.uid;
    }

    this.obtieneCoordenadas();
    
  }

  async obtieneCoordenadas() {

    this.latitude = await this.ionicStorage.get("lastLatitude");
    this.longitude = await this.ionicStorage.get("lastLongitude");

    if (this.latitude == null || this.longitude == null){
      this.geolocation.getCurrentPosition().then((res: any) => {
        this.latitude = res.coords.latitude.toString();
        this.longitude = res.coords.longitude.toString();
        this.ionicStorage.set('lastLatitude', this.latitude);
        this.ionicStorage.set('lastLongitude', this.latitude);
      })
    }

  }

  ngOnInit() {  }

  register( form:any ){

    //console.log(form.value);

    if ( !this.fullName || this.fullName == '' ){
      this.presentAlert('No ha ingresado su nombre.', false);
    }else if ( form.value.telephoneNumber == '' ){
      this.presentAlert('No ha ingresado el número de teléfono.', false);
    }else if ( !this.email || this.email == '' ){
      this.presentAlert('No ha ingresado un email válido.', false);
    }else if ( form.value.zipCode == '' ){
      this.presentAlert('No ha ingresado un zip code válido.', false);
    }else if ( this.experience === null || this.experience === '' ){
      this.presentAlert('No ha seleccionado el nivel de inglés.', false);
    }else if ( form.value.workerPassword === null || form.value.workerPassword === '' ){
      this.presentAlert('No ha ingresado una contraseña.', false);
    }else if ( form.value.workerPassword2 === null || form.value.workerPassword2 === '' ){
      this.presentAlert('No ha confirmado la contraseña.', false);
    }else if ( form.value.workerPassword !== form.value.workerPassword2 ){
      this.presentAlert('La contraseña ingresada no coincide.', false);
    }else{

      if ( this.workerType === this.EMAIL ) this.status = false;

      let worker: Worker = new Worker(
        0,//id
        this.fullName,//fullName
        new Date(),//birthDate
        'M',//gender
        1,//nationalityId
        1,//idType
        '',//idNumber
        '',//address
        this.email,//email
        form.value.telephoneNumber,//telephoneNumber
        '',//itinNumber
        false,//hasVehicle
        this.imgProfile,//profileImage
        this.latitude,//latitude
        this.longitude,//longitude
        form.value.zipCode,//zipCode
        this.experience,//englishLevel
        '',//likes
        0,//reviews
        this.status,//status
        (( this.workerType === this.EMAIL ) ? form.value.workerPassword : '' ),//workerPassword
        this.workerType,//type
        this.externalId, //externalId
        false, //changePassword
        ( this.workerType === this.EMAIL ) //firstLogin
      );
      
      
      this.api.postEvent( worker, 'backend-services/workers' )
        .subscribe ( (result) => {

          console.log('registry', result);

          if ( this.workerType === this.EMAIL ) {            
            this.presentAlert( `Usuario registrado exitosamente. Un correo con instrucciones le será enviado a su cuenta ${ this.email }` , false );
            this.api.cleanStorage();
            this.ionicStorage.clear();
            this.ionicStorage.set('welcomepage', true);
            this.router.navigate(['/login']);
          } else {
            //this.presentAlert( 'Worker registrado exitosamente.', true );

            let auth = {
              'entity': 'W',
              'type': this.workerType,
              'username': this.externalId
            };
  
            this.api.postEvent(
              auth,
              'auth'
            )
            .subscribe( login => {

              // console.log('login', login);              
              this.api.saveStorage( 'token', login['token'] );
              this.api.saveStorage( 'userId', login['clientId'] );

              this.api.getEvent(
                `workers/${ login['clientId'] }`,
                login['token']
              ).subscribe( (usr) => {
  
                this.api.saveStorage( 'workerObject', JSON.stringify(usr) );

                this.router.navigate(['/categories']);
                
              }, (err) => {
                console.log('Error obteniendo información del usuario');
              });
            },
            error => {
              console.log('error en login', error);
            });
            
          }

        }, (err) => {
          
          console.log('Error registrando worker', err);

          this.presentAlert( 'Error registrando worker.', false );

        });


    }

  }

  async presentAlert( message: any , back: boolean) {
    const alert = await this.alertController.create({
      header: 'Registro Nuevo',
      subHeader: 'Jobs Exchange',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    if (back)
      this.router.navigate(['/home']);
  }

}
